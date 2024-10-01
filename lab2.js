use("college")
db.example.insertOne({
    "student_id": 50,
    "class_id": 2,
    "scores": [
        {type: "exam", "score": 58.6},
        {type: "quiz", "score": 22.4},
        {type: "homework", "score": 74.2},
        {type: "homework", "score": 68.3},
        {type: "homework", "score": 17.9}

    ]
});

db.example.insertMany([
    {student_id: 50, class_id: 2, scores: [
        {type: "exam", "score": 58.6},
        {type: "quiz", "score": 18.9},
        {type: "homework", "score": 58.7},
        {type: "homework", "score": 68.7},
        {type: "homework", "score": 17.8}
    ]},
    {student_id: 50, class_id: 15, scores: [
        {type: "exam", "score": 55.4},
        {type: "quiz", "score": 18.7},
        {type: "homework", "score": 59.5},
        {type: "homework", "score": 82.1},
        {type: "homework", "score": 16.8}
]}
])

db.example.find({student_id:50}).pretty()

