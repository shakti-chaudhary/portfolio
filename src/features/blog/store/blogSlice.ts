import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { postsData } from "../data/posts.data"
import type { BlogCategory, BlogPost } from "../types/blog.types"

interface BlogState {
    posts: BlogPost[]
    activeCategory: BlogCategory
    searchQuery: string
    selectedSlug: string | null
}

const initialState: BlogState = {
    posts: postsData,
    activeCategory: 'all',
    searchQuery: '',
    selectedSlug: null,
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setCategory(state,action: PayloadAction<BlogCategory>){
            state.activeCategory = action.payload
        },
        setSearch(state,action: PayloadAction<string>){
            state.searchQuery = action.payload
        },
        selectPost(state,action: PayloadAction<string | null>){
            state.selectedSlug = action.payload
        }
    }
})

export const { setCategory, setSearch, selectPost} = blogSlice.actions
export default blogSlice.reducer