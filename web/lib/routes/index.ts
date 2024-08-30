export const routes = {
  home: () => "/",
  jamstack: () => "/jamstack",
  hire_jamstack_developer: () => "/hire-jamstack-developer",
  four_o_four: () => "/404",
  thank_you: () => "/thank-you",
  pricing: () => "/estimate-project",
  blog_index: () => "/blog/",
  post_category: (category: string) => `/post-categories/${category}`,
};
