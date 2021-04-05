import React, {useEffect, useState} from 'react';


    function GitHubCards ({searchField}){

        const [name,setName] = useState('');
        const [userName, setUserName] = useState('');
        const [followers, setFollowers] = useState('');
        const [following, setFollowing] = useState('');
        const [public_repos, setPublicRepos] = useState('');
        const [avatar, setAvatar] = useState('');
        const [company, setCompany] = useState('');
        const [userInput, setUserInput] = useState('');
        const [error, setError] = useState(null)

        useEffect(() => {
            console.log(searchField, 'searching//')
            fetch(`https://api.github.com/users/${searchField}`)
            .then(res => res.json())
            .then(data =>{
                setData(data)
                console.log(data)
            })
        }, [searchField])

        // useEffect(() => {
        //     fetch(`https://api.github.com/users/${searchField}/repos`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setData(data)
        //         console.log(data)
        //     },[searchField])
        // })
    
        //fetch(`https://api.github.com/users/${searchField}/repos`)

        const setData = ({
            name, 
            login: userName,
            followers,
            following,
            public_repos,
            avatar_url,
            company
        }) => {
            setName(name);
            setUserName(userName);
            setFollowers(followers)
            setFollowing(following)
            setPublicRepos(public_repos)
            setAvatar(avatar_url)
            setCompany(company)
        };
        

        return(
        <div>
            <img alt='ProfilePicture' src={avatar}/>
            <div>
                <p>Hi my name is: {name}</p>
                <p>Username: {userName}</p>
                <p>Employee at: {company}</p>
                <p>{followers} followers</p>
                <p>{following} following</p>
                <p>{public_repos} public repositories</p>
            </div>
        </div>

        )
    };



export default GitHubCards;