module.exports = {
  schema: [
    {
      "http://localhost:4000/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": "secret",
        },
      },
    },
  ],
  documents: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  overwrite: true,
  generates: {
    "./lib/graphql-code-gen/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
