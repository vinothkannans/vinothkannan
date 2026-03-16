"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from "@/components/kibo-ui/contribution-graph";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import { cn } from "@/lib/utils";
import { unstable_cache } from "next/cache";
import type { Activity } from "@/components/kibo-ui/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const username = 'vinothkannans';
const getCachedContributions = unstable_cache(
  async () => {
    const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de');
    const response = await fetch(url);
    const data = (await response.json()) as GitHubContributionsResponse;
    return data.contributions;
  },
  ['github-contributions'],
  { revalidate: 60 * 60 * 24 },
);

export default async function GitHubContributionGraph() {
  const data = await getCachedContributions();
  return (
    <ContributionGraph data={data}>
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            activity={activity}
            className={cn(
              'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
              'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
              'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
              'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
              'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
            )}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
          />
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter />
    </ContributionGraph >
  );
}
