import { createSlice } from "@reduxjs/toolkit";
import { VideoProps, VideoStateProps } from "../../types";
import instance from "../../utils/axios";
import { dispatch } from "..";

const initialState: VideoStateProps = {
    error: null,
    videos: [],
    video: null
}

const videos = createSlice({
    name: "videos",
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload
        },
        addVideoData(state, action) {
            state.videos = action.payload
        },
        getVideoData(state, action) {
            state.videos = action.payload
        },
        getVideoInfo(state, action) {
            state.video = action.payload
        }
    }
})

export const getAllVideosData = () => {
    return async () => {
        try {
            const response = await instance.get("/videos/all")
            console.log("/videos/all", response);
            dispatch(videos.actions.getVideoData(response.data.data.videos))
        } catch (error) {
            dispatch(videos.actions.hasError(error))
        }
    }
}

export const getVideosInfo = (id: string | null) => {
    
    return async () => {
        try {
            const response = await instance.get(`/videos/video/${id}`)
            console.log(response);
            dispatch(videos.actions.getVideoInfo(response.data.data))
        } catch (error) {
            dispatch(videos.actions.hasError(error))
        }
    }
}

export const addVideosData = (data: VideoProps) => {
    return async () => {
        try {
            const response = await instance.post("/videos/addvideo", data)
            dispatch(videos.actions.addVideoData(response))
        } catch (error) {
            dispatch(videos.actions.hasError(error))
        }
    }
}


export default videos.reducer;