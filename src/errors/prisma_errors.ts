export const prismaErrors: {
  [key: string]: string;
} = {
  P2000:
    "The value you're trying to insert/update is too long for the specified column.",
  P2001: "The record you're searching for does not exist.",
  P2002:
    "A unique constraint on a column failed, indicating a duplicate value.",
  P2003:
    "A foreign key constraint failed, suggesting an invalid reference to another table.",
  P2004: "A general constraint on the database failed.",
  P2005:
    "The value stored in the database for a field is invalid for its type.",
  P2006: "The provided value for a field is not valid.",
  P2007: "There's a data validation error in the database.",
  P2008: "Parsing of a query failed at a specific position.",
  P2009: "Validation of a query failed at a specific position.",
  P2010: "A raw database query failed with a given code and message.",
  P2011: "A null constraint was violated.",
  P2012: "A required value is missing.",
  P2013: "A required argument for a field is missing.",
  P2014: "A change would violate a required relation between models.",
  P2015: "A related record could not be found.",
  P2016: "There's an error interpreting a query.",
  P2017: "Records for a relation between models are not connected.",
  P2018: "Required connected records were not found.",
  P2019: "There's an input error.",
  P2020: "The value is out of range for its type.",
  P2021: "A specified table does not exist in the database.",
  P2022: "A specified column does not exist in the database.",
  P2023: "There's inconsistent data in a column.",
  P2024: "Timed out while fetching a new connection from the connection pool.",
  P2025:
    "An operation depends on one or more required records that were not found.",
  P2026:
    "The current database provider does not support a feature used in the query.",
  P2027: "Multiple errors occurred during query execution.",
  P2028: "There's an error in the transaction API.",
  P2029: "The query parameter limit has been exceeded.",
  P2030: "Unable to find a fulltext index for the search.",
  P2031: "Prisma requires MongoDB to be run as a replica set for transactions.",
  P2033:
    "A number used in the query does not fit into a 64-bit signed integer.",
  P2034: "A transaction failed due to a write conflict or a deadlock.",
  P2035: "There's an assertion violation on the database.",
  P2036: "There's an error in an external connector.",
  P2037: "Too many database connections are opened.",
};
