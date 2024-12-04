import axios from "axios";

const API = "http://127.0.0.1:5001/robotica-tests-environment/us-central1/";

export const getStudents = async() => {
    const body = { data: {} };

    try {
        const response = await axios.post(API + "getStudents" , body);
        return response.data;
    }
    catch (error) {
        console.error(error);
        throw new Error("Failed to get students");
    }
}

export const getAttendanceByStudent = async(studentRA: string) => {
    const body = { data: { ra: studentRA } };

    try {
        const response = await axios.post(API + "getAttendanceByStudent" , body);
        return response.data;
    }
    catch (error) {
        console.error(error);
        throw new Error("Failed to get attendance by student");
    }
}