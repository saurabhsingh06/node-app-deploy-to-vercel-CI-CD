# node-app-deploy-to-vercel-CI-CD
How to deploy node application to vercel. Using actions feature of github for CI/CD

# STEPS

# 1  To use multiple git account in ubuntu system 
    => cmd: ssh-keygen
    => Enter file name | eg saurabhsingh06
    => Optional password
    => Open file using cmd: cat /home/ubuntu/.ssh/saurabhsingh06.pub
    => Copy key
    => Open github.com
    => Setting 
    => SSH & GPG Keys
    => Set the keys and values as copied key and save
    => Goto directory cmd: cd ~/.ssh
    => Create config file cmd: touch config
    => Open config file and paste
        # Account 1
        Host github.com
        HostName github.com
        # IgnoreUnknown UseKeychain
        # UseKeychain yes
        User git
        IdentityFile ~/.ssh/saurabhsingh06

        # Account 2
        Host github.com-unofficial
        HostName github.com
        # IgnoreUnknown UseKeychain
        # UseKeychain yes
        User git
        IdentityFile ~/.ssh/saurabhsingh006
    
    => While cloning use ssh URL instead of http
    => Setup is done

# 2  Goto github repo and click on actions
# 3  Scroll down to Continous Integration sections and click view all
# 4  Type Node.js => Click Configure => click Start commit
# 5  Create vercel.json file and paste
        {
            "version": 2,
            "builds": [
            {
                "src": "index.js",
                "use": "@now/node"
            }
            ],
            "routes": [
            {
                "src": "/(.*)",
                "dest": "index.js"
            }
            ]
        }


# DEPLOYED ON https://node-app-deploy-to-vercel-ci-cd.vercel.app/