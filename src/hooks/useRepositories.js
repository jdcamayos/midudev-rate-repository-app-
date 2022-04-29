import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { Platform } from "react-native"
import { GET_REPOSITORIES } from "../graphql/queries"

export const useRepositories = () => {
  return Platform.select({
    android: () => {
      const [repositories, setRepositories] = useState(null)

      const fetchRepositories = async () => {
        try {
          const response = await globalThis.fetch('http://192.168.10.10:5000/api/repositories')
          const json = await response.json()
          setRepositories(json)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        fetchRepositories()
      }, [])

      const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : []

      return { repositories: repositoriesNodes }
    },
    default: () => {
      const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
      const { repositories = null } = data

      const repositoriesNodes = repositories
        ? repositories.edges.map(({ node }) => node)
        : []

      return { loading, repositories: repositoriesNodes, refetch }
    }
  })()
}


