SELECT
C.club_name AS name,
SUM(3 * (M.home_team_goals > M.away_team_goals) +
  (M.home_team_goals = M.away_team_goals)) AS total_points,
COUNT(M.id) AS total_games,
SUM((M.home_team_goals > M.away_team_goals)) AS total_victories,
SUM((M.home_team_goals = M.away_team_goals)) AS total_draws,
SUM((M.home_team_goals < M.away_team_goals)) AS total_losses,
SUM(M.home_team_goals) AS goals_favor,
SUM(M.away_team_goals) AS goals_own,
SUM(M.home_team_goals - M.away_team_goals) AS goals_balance,
ROUND(SUM(3 * (M.home_team_goals > M.away_team_goals) +
  (M.home_team_goals = M.away_team_goals)) /
(3 * COUNT(M.id)) * 100, 2) AS efficiency
FROM matchs as M
INNER JOIN clubs as C
ON M.home_team = C.id
GROUP BY C.id
ORDER BY total_points DESC,
total_victories DESC,
goals_balance DESC,
goals_favor DESC,
goals_own ASC
;
