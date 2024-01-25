export async function generateModelResponse(question) {
    const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '28bd6033c7msh74a4291b4702804p113be5jsn5e458e3b50d3',
            'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: question,
                }
            ],
            web_access: false,
            stream: false,
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const responseOk = result.result
        return responseOk;
    } catch (error) {
        console.error(error);
    }
}

export async function summarizeArticle(articleUrl) {
    const url = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=' + articleUrl;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39ba0210e1msh4ba24cddb52e2b2p1ffdd6jsn92442d2387e8',
            'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse as JSON
        const responseOk = result.summary
        return responseOk;
    } catch (error) {
        console.error(error);
    }
}

export async function imageGeneration(imagePrompt) {
    const url = 'https://ai-image-generator3.p.rapidapi.com/generate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'dfc0b8e44amshb439e36c87c88aap1f3f36jsne2f7595e9e50',
            'X-RapidAPI-Host': 'ai-image-generator3.p.rapidapi.com'
        },
        body: JSON.stringify({
            prompt: imagePrompt,
            page: 1
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse as JSON
        const imageUrl = result.results.images[0];
        console.log(result);
        return imageUrl;
    } catch (error) {
        console.error(error);
    }
}

export async function codeGenerator(codePrompt) {
    const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '28bd6033c7msh74a4291b4702804p113be5jsn5e458e3b50d3',
            'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: codePrompt,
                }
            ],
            web_access: false,
            stream: false,
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const responseOk = result.result;
        return responseOk;
    } catch (error) {
        console.error(error);
    }
}