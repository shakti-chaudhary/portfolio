import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useMemo } from "react"
import type { BlogCategory } from "../types/blog.types"
import { setCategory, selectPost, setSearch } from "@/features/blog"

export function useBlog() {
  const dispatch = useAppDispatch()
  const { posts, activeCategory, searchQuery, selectedSlug } = useAppSelector((s) => s.blog)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (post.draft) return false;
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =  !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q) || post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch
    }) 
  }, [posts, activeCategory, searchQuery])

  const featured = useMemo(() => posts.filter((post) => post.featured && !post.draft), [posts])

  const currentPost = useMemo( () => posts.find((post) => post.slug === selectedSlug) ?? null, [posts, selectedSlug] )

  return {
    posts: filteredPosts,
    featured,
    currentPost,
    activeCategory,
    searchQuery,
    selectedSlug,
    setCategory: (c: BlogCategory) => dispatch(setCategory(c)),
    setSearch: (q: string) => dispatch(setSearch(q)),
    selectPost: (slug: string | null) => dispatch(selectPost(slug)),
  }
}
