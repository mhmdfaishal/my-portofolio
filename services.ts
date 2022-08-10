import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl6kvc389032c01ulgsve3l6g/master"
);

export const QUERY = gql`
  {
    skills(first:20, orderBy: uniqueId_ASC) {
      uniqueId
      skill
      id
      proficient
      fieldType
      image 
      url
    }
    certificates(first:20, orderBy: uniqueId_ASC) {
      uniqueId
      organization
      name
      id
      image 
      url
    }
    jobs(orderBy: from_DESC) {
      id
      company
      designation
      companyLinkedin
      companyUrl
      from
      to
      logo
    }
    projects(orderBy: uniqueId_ASC) {
      id
      title
      uniqueId
      description
      demoLink
      githubLink
      techStack 
      image 
    }
  }
`;
