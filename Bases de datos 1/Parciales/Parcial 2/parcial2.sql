DROP TABLE IF EXISTS sales;

CREATE TABLE IF NOT EXISTS sales(
    invoice_id VARCHAR(20) PRIMARY KEY,
    branch CHAR(1),
    city VARCHAR(50),
    customer_type VARCHAR(10),
    gender VARCHAR(10),
    product_line VARCHAR(50),
    unit_price DECIMAL(10, 2),
    quantity INT,
    tax_5 DECIMAL(10, 4),
    total DECIMAL(10, 4),
    date DATE,
    time TIME,
    payment VARCHAR(20),
    cogs DECIMAL(10, 2),
    gross_margin_percentage DECIMAL(5, 2),
    gross_income DECIMAL(10, 4),
    rating DECIMAL(3, 1)
);

SELECT
    branch,
    city,
    customer_type,
    SUM(total) AS total_sales
FROM
    sales
GROUP BY
    branch, city, customer_type;

EXPLAIN ANALYZE
SELECT
    branch,
    city,
    customer_type,
    SUM(total) AS total_sales
FROM
    sales
GROUP BY
    branch, city, customer_type;

DROP INDEX IF EXISTS idx_branch;
CREATE INDEX idx_branch ON sales(branch);
DROP INDEX IF EXISTS idx_city;
CREATE INDEX idx_city ON sales(city);
DROP INDEX IF EXISTS idx_customer_type;
CREATE INDEX idx_customer_type ON sales(customer_type);
EXPLAIN ANALYZE
SELECT
    branch,
    city,
    customer_type,
    SUM(total) AS total_sales
FROM
    sales
GROUP BY
    branch, city, customer_type;


CREATE OR REPLACE FUNCTION check_business_hours()
RETURNS TRIGGER AS $$
BEGIN
    -- Verificar si la hora del registro está dentro del horario hábil (08:00 a 20:00)
    IF EXTRACT(HOUR FROM NEW.time) < 8 OR EXTRACT(HOUR FROM NEW.time) >= 20 THEN
        RAISE EXCEPTION 'Operaciones solo permitidas durante el horario hábil (08:00 a 20:00)';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_business_hours
BEFORE INSERT OR UPDATE ON sales
FOR EACH ROW
EXECUTE FUNCTION check_business_hours();


INSERT INTO sales (invoice_id, branch, city, customer_type, gender, product_line, unit_price, quantity, tax_5, total, date, time, payment, cogs, gross_margin_percentage, gross_income, rating)
VALUES ('123-45-6789', 'A', 'Yangon', 'Normal', 'Male', 'Health and beauty', 50.00, 1, 2.5, 52.5, '2023-05-17', '19:00:00', 'Ewallet', 50.0, 4.761904762, 2.5, 9.0);

CREATE OR REPLACE VIEW sales_trends_report AS
SELECT
    branch,
    city,
    customer_type,
    product_line,
    SUM(total) AS total_sales,
    AVG(total) AS average_sales,
    SUM(quantity) AS total_quantity,
    COUNT(*) AS total_transactions
FROM
    sales
GROUP BY
    branch, city, customer_type, product_line
ORDER BY
    branch, city, customer_type, product_line;

SELECT * FROM sales_trends_report;



