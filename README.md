# Kitchen Simulator

A "Just for Fun" learning experiment using NodeJS.

(┛◉Д◉)┛ 彡 ┻━┻

## What

Kitchen Simulator is a web app intended to be primarily used by restaurants for taking and managing kicthed orders. Kitchen Orders are orders placed by customers.

## Scope

**Version 1.0 scope:**

- Product Catalogue
  - List of AVailable Products
  - Product Pricing
- Reciving orders

**Planned version 1.1 scope:**

- User registration
- OAuth

## Entity Relationship Diagram (ERD)

### Product

| Name     |  Type   |
| -------- | :-----: |
| Name     | Strign  |
| isActive | Boolean |

### PriceBook

| Name     |  Type   |
| -------- | :-----: |
| Name     | Strign  |
| isActive | Boolean |

### PricebookEntry

| Name       |          Type           |
| ---------- | :---------------------: |
| Product    |   Foren Key (Product)   |
| Price Book | Foren Key (PrPriceBook) |
| Price      |         Number          |

### Oder

| Name       |        Type        |
| ---------- | :----------------: |
| Client     | Foren Key (Client) |
| Order Date |        Date        |
| Total      |       Number       |

### Oder Line Item

| Name             |             Type             |
| ---------------- | :--------------------------: |
| Order            |      Foren Key (Order)       |
| Price Book Entry | Foren Key (Price Book Entry) |
| Discount         |            Number            |

### Account, a.k.a Customer

| Name |  Type  |
| ---- | :----: |
| Name | String |
