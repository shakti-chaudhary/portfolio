import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import type { ProjectCategory } from "../types/projects.types";
import { selectProject, setCategory } from "../store/projectsSlice";

export function useProjects() {
    const dispatch = useAppDispatch();
    const {items, activeCategory, selectedId} = useAppSelector((s)=>s.projects)

    const filtered = useMemo(() => {
    if (activeCategory === 'all') return items
    return items.filter((p) => p.category === activeCategory)
  }, [items, activeCategory])

  const featured = useMemo(()=> items.filter((p)=>p.featured), [items])
    
  return {
    projects :filtered,
    featured,
    activeCategory,
    selectedId,
    setCategory: (c: ProjectCategory) => dispatch(setCategory(c)),
    selectProject: (id: string | null) => dispatch(selectProject(id)),
  }
}