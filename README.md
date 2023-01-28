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

# 2  
