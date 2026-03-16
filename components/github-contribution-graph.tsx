"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from "@/components/kibo-ui/contribution-graph";
import { cn } from "@/lib/utils";
import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { useEffect, useState } from "react";

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const username = 'vinothkannans';
const getCachedContributions = async () => {
  const url = new URL(`/v4/${username}?y=last`, 'https://github-contributions-api.jogruber.de');
  const response = await fetch(url);
  const data = (await response.json()) as GitHubContributionsResponse;
  return data.contributions;
}

export default function GitHubContributionGraph() {
  const [data, setData] = useState<Activity[]>([]);

  useEffect(() => {
    getCachedContributions().then((contributions) => {
      setData(contributions);
    });
  }, []);

  return (
    <ContributionGraph data={data} className="mx-auto">
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            activity={activity}
            className={cn(
              'data-[level="0"]:fill-muted dark:data-[level="0"]:fill-muted',
              'data-[level="1"]:fill-chart-2 dark:data-[level="1"]:fill-chart-2',
              'data-[level="2"]:fill-chart-3 dark:data-[level="2"]:fill-chart-3',
              'data-[level="3"]:fill-chart-4 dark:data-[level="3"]:fill-chart-4',
              'data-[level="4"]:fill-chart-5 dark:data-[level="4"]:fill-chart-5'
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
