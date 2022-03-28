SELECT
C.club_name AS name,
SUM(3 * (M.home_team_goals > M.away_team_goals) +
  (M.home_team_goals = M.away_team_goals)) AS totalPoints,
COUNT(M.id) AS totalGames,
SUM((M.home_team_goals > M.away_team_goals)) AS totalVictories,
SUM((M.home_team_goals = M.away_team_goals)) AS totalDraws,
SUM((M.home_team_goals < M.away_team_goals)) AS totalLosses,
SUM(M.home_team_goals) AS goalsFavor,
SUM(M.away_team_goals) AS goalsOwn,
SUM(M.home_team_goals - M.away_team_goals) AS goalsBalance,
ROUND(SUM(3 * (M.home_team_goals > M.away_team_goals) +
  (M.home_team_goals = M.away_team_goals)) /
(3 * COUNT(M.id)) * 100, 2) AS efficiency
FROM matchs as M
INNER JOIN clubs as C
ON M.home_team = C.id
AND M.in_progress = false
GROUP BY C.id
ORDER BY totalPoints DESC,
totalVictories DESC,
goalsBalance DESC,
goalsFavor DESC,
goalsOwn ASC
;
