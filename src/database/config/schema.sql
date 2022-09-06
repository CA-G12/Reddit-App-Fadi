BEGIN;

INSERT INTO USERS(USERNAME, PASSWORD, AVATAR) VALUES
('fadezak100', '$2a$12$Cs4tLDY1/iqTYzAsxPRlwey0nBjuEm2olZ6b8BJi4X.ZzIhQ/1Ci6
', 'https://pbs.twimg.com/profile_images/1559252590696828929/BsqrxPyi_400x400.jpg'),
('mohammedzak', '$2a$12$Cs4tLDY1/iqTYzAsxPRlwey0nBjuEm2olZ6b8BJi4X.ZzIhQ/1Ci6', 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png' ),
('hasansal', '$2a$10$WPyn0YQ5fglKMfXrtdwLO.n0N4B7rl52TqWfnwWrGTpYykyRtkOPW', 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png');

INSERT INTO POSTS(CONTENT, USER_ID) VALUES 
('this is the first post ever by user one', 1),
('This is the second post by user two', 2),
('this is another post by user one', 1);

INSERT INTO COMMENTS(CONTENT, USER_ID, POST_ID) VALUES
('GOOD POST!!', 2, 1),
('THANKS BRO!!', 3, 2),
('LFGTM!', 1, 2);

INSERT INTO VOTES(VOTES_UP, VOTES_DOWN, USER_ID, POST_ID, COMMENT_ID) VALUES
(1, NULL, 1, 2, NULL),
(NULL, -1, 2, 1, NULL),
(1, NULL, 1, NULL, 1);

COMMIT;