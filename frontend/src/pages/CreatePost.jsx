import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post('https://practice-hjlz.onrender.com/create', formData)
         .then((res) => {
            console.log(res)
            navigate('/feed')
         })
         .catch((err) => {
            alert('Error creating post')
         })
    }

    
}