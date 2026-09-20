function Resume() {
    return(
        <div className="w-full px-6">
            <h1 className="text-3xl text-center underline">Resume</h1>
            <div className="mt-8 flex justify-center">
                <iframe 
                src="/online-resume.pdf"
                className="w-full h-250 max-w-4xl border"
                title="Resume"
                />
            </div>
        </div>
    )
}

export default Resume