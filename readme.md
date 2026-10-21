Skip to content
 
Search Gists
Search...
All gists
Back to GitHub
Sign in
Sign up
Instantly share code, notes, and snippets.

@Frontmaniaac
Frontmaniaac/gist:50028d26057ba88110aadb7756039897 Secret
Last active 4 months ago
Code
Revisions
2
Clone this repository at &lt;script src=&quot;https://gist.github.com/Frontmaniaac/50028d26057ba88110aadb7756039897.js&quot;&gt;&lt;/script&gt;
<script src="https://gist.github.com/Frontmaniaac/50028d26057ba88110aadb7756039897.js"></script>
C_CPE Mock Exam
gistfile1.txt
# Coffee Shop System 
You have been hired as a backend developer for Bean & Byte, a modern coffee shop chain looking to digitize its ordering system. The management wants a scalable solution built on the SAP Cloud Application Programming Model (CAP) to manage incoming customer orders and item breakdowns.

To boost mid-week sales, the marketing team introduces a dynamic, time-sensitive pricing strategy: customers receive a high discount early in the week, a smaller discount on Thursdays and Fridays, and a slight surcharge (negative discount) during peak weekend rushes.

Your task is to design the core data model, expose it via a clean OData service, implement the automated dynamic discount logic based on the local system time, and prepare the multi-target application (MTA) for productive deployment to the SAP BTP Cloud Foundry environment.

## Task 1 – Data Model

Create the data model in the `db/schema.cds` file using the exact namespace, entities, and relationships defined below.


- **Namespace:** `exam.coffeeshop`

### 1) Enum `CoffeeSize`
- `S = 'Small'`
- `M = 'Medium'`
- `L = 'Large'`

### 2) Entity `Orders`
- `ID` : UUID
- `customerName` : String
- `totalAmount` : Decimal(10,2)
- `discountAmount` : Integer (Virtual field)
- `discount` : Integer (Virtual field)

### 3) Entity `OrderItems`
- `ID` : UUID
- `coffeeName` : String
- `size` : CoffeeSize
- `price` : Decimal(10,2)
- `quantity` : Integer


## Mock Data Initialization

Create mock data using the following data:

### Table: Orders

| ID | customerName | totalAmount |
| :--- | :--- | :--- |
| 3f0c9d7e-6a51-4f18-9a4e-8e1b2f6d0c41 | Alice | 12.50 |
| b2a4f8c1-97de-4b5f-83a7-1f0d6e9c3a72 | Bob | 7.80 |

### Table: OrderItems for Alice's Order

| ID | coffeeName | size | price | quantity |
| :--- | :--- | :--- | :--- | :--- |
| 6d2f9a10-1b63-4c8d-a7f1-5e93b4c2d801 | Espresso | Small | 3.50 | 1 |
| 91b7e3d4-5c2a-4f69-8d1e-2a6c9b0f7e13 | Cappuccino | Medium | 4.50 | 2 |
### Table: OrderItems for Bob's Order

| ID | coffeeName | size | price | quantity |
| :--- | :--- | :--- | :--- | :--- |
| c7e1a9f2-8d44-4b1a-b3e7-9f2c6d0a5b84 | Latte Macchiato | Large | 5.00 | 1 |
| d4b8c1e7-2f95-4a6d-9e3c-7a1f0b5d6c29 | Americano | Medium | 2.80 | 1 |
## Task 2 – Service

Create the service definition.

- Define service `CoffeeShopService` with path `/coffee`.
- Expose entity `Orders`.
- Expose entity `OrderItems`.

---

## Task 3 – Service Logic

Implement the custom service handler in a file `*.js` matching your service definition.

- Register an event handler for the `READ` operation on the `Orders` entity.
- When reading `Orders` records, dynamically populate the virtual field `discount` based on the current system weekday.

### Discount Calculation Logic
Determine the current weekday using local system time and assign:

- **Monday, Tuesday, Wednesday:** `10`
- **Thursday, Friday:** `5`
- **Saturday, Sunday:** `-5`

---

## Task 4 – Deploy the Application

Prepare the application for productive deployment to SAP BTP Cloud Foundry. Execute the recommended build and deployment commands sequentially to successfully push your Multi-Target Application (MTA) live.
 to join this conversation on GitHub. Already have an account? Sign in to comment
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information
