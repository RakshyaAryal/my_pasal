import React, {useEffect, useState} from 'react';

const Student = (props) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        let myStudent = [
            {
                name: "kiran",
                rollNo: 4
            },
            {
                name: "rakshya",
                rollNo: 1
            }
        ];

        setTimeout(() => {setStudents(myStudent);}, 5000);


    }, []);

    return(
        <div>
            {
                students.map((student, i) => {
                    return (
                        <div key={i}>
                            <div>{student.name}</div>
                            <div>{student.rollNo}</div>
                        </div>
                    )
                })
            }

            { students.length === 0 &&
            <div>
                No students record found
            </div>
            }

        </div>
    );
};

export default Student;