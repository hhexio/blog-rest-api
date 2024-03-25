import { faker } from "@faker-js/faker";
import { Post } from "../schema/posts";

export function mockPost(): Post {
  return {
    id: faker.number.int(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
    user_id: faker.number.int(),
  };
}

export const Posts: Post[] = faker.helpers.multiple(mockPost, {
  count: 50,
});
