SELECT *
FROM user u
WHERE NOT EXISTS (
    SELECT 1
    FROM purchase p
    WHERE p.user_id = u.id
);
