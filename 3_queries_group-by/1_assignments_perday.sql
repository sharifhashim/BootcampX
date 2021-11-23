-- SELECT day, count(assignments) as total_assignments
-- FROM assignments
-- GROUP BY assignments.day
-- ORDER BY day;

SELECT day, count(*) as total_assignments 
FROM assignments
GROUP BY day
ORDER BY day;