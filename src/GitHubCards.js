import React, {useEffect, useState} from 'react';


    function GitHubCards (){

        const [name,setName] = useState('');
        const [userName, setUserName] = useState('');
        const [followers, setFollowers] = useState('');
        const [following, setFollowing] = useState('');
        const [repos, setRepos] = useState('');
        const [avatar, setAvatar] = useState('');
        const [userInput, setUserInput] = useState('');
        const [error, setError] = useState(null)

        useEffect(() => {
            fetch("https://api.github.com/users/AzriRahmat-SDev")
            .then(res => res.json())
            .then(data =>{
                setData(data)
                console.log(data)
            })
        }, [])

        const setData = ({ 
            login: name,
            followers,
            following,
            public_repos,
            avatar_url
        }) => {
            setName(name)
            setUserName(name);
            setFollowers(followers)
            setFollowing(following)
            setRepos(public_repos)
            setAvatar(avatar_url)
        };
        

        return(
        <div>
            <img alt='ProfilePicture' src={avatar}/>
            <div>
                <h2>hi my name is: {name}</h2>
                <p>{userName}</p>
            </div>
        </div>

        )
    };



export default GitHubCards;