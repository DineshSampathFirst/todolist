
-- Users
INSERT INTO Users (name, email) VALUES 
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Charlie', 'charlie@example.com'),
('David', 'david@example.com'),
('Eva', 'eva@example.com');

-- Categories
INSERT INTO Categories (name) VALUES 
('Work'), ('Personal'), ('Study'), ('Fitness'), ('Shopping');

-- Priorities
INSERT INTO Priorities (level) VALUES 
('Low'), ('Medium'), ('High'), ('Urgent'), ('Critical');

-- Labels
INSERT INTO Labels (name) VALUES 
('Important'), ('Optional'), ('Recurring'), ('Client'), ('Project');

-- Tasks
INSERT INTO Tasks (user_id, title, description, due_date, is_completed, category_id, priority_id) VALUES
(1, 'Finish report', 'Complete Q2 report', '2025-05-30', false, 1, 3),
(2, 'Buy groceries', 'Milk, Bread, Eggs', '2025-05-26', false, 5, 2),
(3, 'Yoga class', 'Morning session at 7AM', '2025-05-27', false, 4, 1),
(4, 'Math assignment', 'Submit by email', '2025-05-28', true, 3, 3),
(5, 'Client call', 'Weekly sync-up', '2025-05-29', false, 1, 4);

-- TaskLabels
INSERT INTO TaskLabels (task_id, label_id) VALUES 
(1, 1), (1, 4),
(2, 2),
(3, 3),
(5, 4), (5, 5);
