export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616d5dc63b396ffc41e170b7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-kihqesbr",
                  apiId: "90cee795-b094-4871-a75c-39ca1b136619",
                },
                {
                  buildHookId: "616d5dc66ea89ffb81565c7b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6qog2468",
                  apiId: "73a24e07-762a-4c4e-9129-8bf6d28578e8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/havesomeleeway/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6qog2468.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
