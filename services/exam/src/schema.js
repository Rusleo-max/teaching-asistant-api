const { gql } = require('apollo-server');
module.exports = gql`
    
    scalar JSON

    enum EXAMSET_LEVEL { Level1 Level2 Level3 Level4 Level5 }

    type Exam @key(fields: "_id") {
        _id: ID!
        title: String
        date: String,
    }

    type ExamSet @key(fields: "_id") {
        _id: ID!,
        examId: String,
        categoryId: String,
        title: String,
        publisherId: String,
        publishYear: Int,
        isbn: String,
        level: EXAMSET_LEVEL,
        showToUsers: Boolean,
        image: String,
    }

    type Lesson @key(fields: "_id") {
        _id: ID!
        title: String!
    }

    type Query {
        # -----   E X A M   -----
        exam(_id: ID!): Exam!
        exams(title: String, offset: Int, limit: Int): [Exam]!
        
        # -----   E X A M S E T   -----
        examSet(_id: ID!): ExamSet
        examSets(examId: String, categoryId: String, publisherId: String, publishYear: Int, level: EXAMSET_LEVEL, showToUsers: Boolean, offset: Int, limit: Int): [ExamSet]!

        # -----   L E S S O N   -----
        lesson(_id: ID): Lesson
        lessons(title: String, offset: Int, limit: Int): [Lesson]!

    }

    type Mutation {
        # -----   E X A M   -----
        addExam(title: String!, date: String!): ExamResponse!
        updateExam(_id: ID!, title: String, date: String): ExamResponse!
        deleteExam(_id: ID!): ExamResponse!
        
        # -----   E X A M S E T   -----
        addExamSet(examId: String!, categoryId: String!, title: String!, publisherId: String!, publishYear: Int!, isbn: String, level: EXAMSET_LEVEL, showToUsers: Boolean, image: String): ExamResponse!
        updateExamSet(_id: ID!, examId: String, categoryId: String, title: String, publisherId: String, publishYear: Int, isbn: String, level: EXAMSET_LEVEL, showToUsers: Boolean, image: String): ExamResponse!
        deleteExamSet(_id: ID!): ExamResponse!

        # -----   L E S S O N   -----
        addLesson(title: String!): ExamResponse!
        updateLesson(_id: ID!, title: String!): ExamResponse!
        deleteLesson(_id: ID!): ExamResponse!
    }

    type ExamResponse {
        status: String!,
        message: String!,
        content: JSON!
    }
`;