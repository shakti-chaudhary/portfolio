import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { projectsData } from "../data/projects.data";
import type { Project, ProjectCategory } from "../types/projects.types";



interface ProjectsState {
    items: Project[]
    activeCategory: ProjectCategory
    selectedId: string | null    
}

const initialState: ProjectsState = {
    items: projectsData,
    activeCategory: 'all',
    selectedId: null
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setCategory(state,action:PayloadAction<ProjectCategory>){
            state.activeCategory = action.payload
        },
        selectProject(state,action:PayloadAction<string|null>){
            state.selectedId = action.payload
        }
    }
})

export const { setCategory, selectProject} = projectsSlice.actions;
export default projectsSlice.reducer;