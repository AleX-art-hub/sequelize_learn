/*ТРАНЗАКЦИИ*/

/*
CREATE SCHEMA sandbox;
*/
/*
CREATE TABLE sandbox.CreditCards(
    id serial PRIMARY KEY,
    number_cc char(16) NOT NULL UNIQUE CHECK (number_cc ~ '^[0-9]{16}$'),
    expire timestamp NOT NULL,
    cvc char(3) NOT NULL UNIQUE CHECK (cvc ~ '^[0-9]{3}$'),
    balance money NOT NULL DEFAULT 0 :: money
);

INSERT INTO sandbox.CreditCards (number_cc, expire, cvc, balance) VALUES
('4528000841861367', '2023-01-07','909', 19000),
('9272180048794998', '2020-02-07','365', 157000)
RETURNING *;
*/

/*Списать с 1 карточки средств 2000 грн на 2 карту*/

BEGIN TRANSACTION;

UPDATE sandbox.CreditCards
SET balance = balance - 2000::money
WHERE id=1;

UPDATE sandbox.CreditCards
SET balance = balance + 2000::money
WHERE id=2;

COMMIT;


