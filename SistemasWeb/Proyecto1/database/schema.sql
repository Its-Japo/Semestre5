DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'blog_user') THEN
        CREATE ROLE blog_user LOGIN PASSWORD 'blog_password';
    END IF;
END
$$;

-- Granting privileges
GRANT ALL PRIVILEGES ON DATABASE blog_db TO blog_user;

CREATE TABLE IF NOT EXISTS blogs(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_base64 TEXT
);
