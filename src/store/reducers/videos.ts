import { createSlice } from "@reduxjs/toolkit";
import { VideoProps, VideoStateProps } from "../../types";
import instance from "../../utils/axios";
import { dispatch } from "..";

const initialState: VideoStateProps = {
    error: null,
    videos: [],
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
        }
    }
})

export const getAllVideosData = () => {
    return async () => {
        try {
            const response = instance.get("/videos/all")
            dispatch(videos.actions.getVideoData(response))
        } catch (error) {
            dispatch(videos.actions.hasError(error))
        }
    }
}

export const addVideosData = (data: VideoProps) => {
    return async () => {
        try {
            const response = instance.post("/videos/addvideo", data)
            console.log(response);
            dispatch(videos.actions.addVideoData(response))
        } catch (error) {
            dispatch(videos.actions.hasError(error))
        }
    }
}


export default videos.reducer;