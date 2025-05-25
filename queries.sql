
-- Insert a new task
INSERT INTO Tasks (user_id, title, description, due_date, is_completed, category_id, priority_id)
VALUES (1, 'Read book', 'Read 20 pages of design patterns', '2025-06-01', false, 3, 2);

-- Update task status
UPDATE Tasks SET is_completed = true WHERE task_id = 1;

-- Delete a task
DELETE FROM Tasks WHERE task_id = 2;

-- Retrieve all tasks with joins
SELECT T.title, U.name AS user, C.name AS category, P.level AS priority
FROM Tasks T
JOIN Users U ON T.user_id = U.user_id
JOIN Categories C ON T.category_id = C.category_id
JOIN Priorities P ON T.priority_id = P.priority_id;

-- Tasks due in next 3 days with High priority
SELECT title FROM Tasks
JOIN Priorities ON Tasks.priority_id = Priorities.priority_id
WHERE Priorities.level = 'High' AND due_date BETWEEN CURDATE() AND CURDATE() + INTERVAL 3 DAY;

-- Users with no tasks
SELECT name FROM Users
WHERE user_id NOT IN (SELECT DISTINCT user_id FROM Tasks);
