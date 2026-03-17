"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { format } from "date-fns";

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
    <ContributionGraph data={data} className="mx-auto" maxLevel={4}>
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>
            <TooltipContent>
              <p className="flex flex-col items-center">
                <span className="text-xl">{activity.count}</span>
                <span>contribution{activity.count > 1 ? "s" : null}</span>
                <span>{format(new Date(activity.date), "EEE, MMM dd, yyyy")}</span>
              </p>
            </TooltipContent>
          </Tooltip>
        )
        }
      </ContributionGraphCalendar >
      <ContributionGraphFooter>
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} open source contributions in {year}
            </div>
          )}
        </ContributionGraphTotalCount>
        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph >
  );
}
