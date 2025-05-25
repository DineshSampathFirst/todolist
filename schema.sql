
-- Users Table
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Categories Table
CREATE TABLE Categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

-- Priorities Table
CREATE TABLE Priorities (
    priority_id INT PRIMARY KEY AUTO_INCREMENT,
    level VARCHAR(20)
);

-- Tasks Table
CREATE TABLE Tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255),
    description TEXT,
    due_date DATE,
    is_completed BOOLEAN DEFAULT FALSE,
    category_id INT,
    priority_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id),
    FOREIGN KEY (priority_id) REFERENCES Priorities(priority_id)
);

-- Labels Table
CREATE TABLE Labels (
    label_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

-- TaskLabels Table
CREATE TABLE TaskLabels (
    task_id INT,
    label_id INT,
    PRIMARY KEY (task_id, label_id),
    FOREIGN KEY (task_id) REFERENCES Tasks(task_id),
    FOREIGN KEY (label_id) REFERENCES Labels(label_id)
);
