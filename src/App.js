
function App() {
    const title = "hello luv"
    const body = "this is a test"
    const comments = [
        {id: 1, text: "this is comment 1"},
        {id: 2, text: "this is comment 3"},
        {id: 3, text: "this is comment 3"}
    ]
    const loading = false
    const showComments = true
    
    if (loading) return <h1>Loading ....</h1>

    const commentBlock = (
    <div className="comments">
    <h3>comments ({comments.length})</h3>
    <ul>
        {comments.map((comments, index) =>(
            <li key={index}>{comments.text}</li>
        ))}
    </ul>
    </div>
    )

     return (
     <div className="container">
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>

        {showComments && (commentBlock)
}

        

     </div>
     )
    }

export default App;