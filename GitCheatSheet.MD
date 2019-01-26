#Create New Branch
git checkout -b [yourBranchName]-#<issueNumber>

    You can name your branch with just a name or a name and an issue number. Pending on which one you choose, you will need to be consistent. Examples:
        git checkout -b login-#3
        git checkout -b login


#Make Changes...


#Save Changes
git add .
git commit -m "[message]"
    <!-- now all of your changes are saved on YOUR branch -->

    For commit messages: https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716 
    Quick Referece: verb(thingChanged): changeDescription
    Example:
    git commit -m "add(loginForm) login form setup on front-end"


#Update YOUR Master Branch
git checkout master
git pull


#Go Back To Your Branch & Merge It With Master
git checkout [yourBranchName]-#<issueNumber>
git merge master


##Push Your Merged Branch Up To GitHub
    ##If using just branch names
git push origin [yourBranchName]

    ##If using branch names and issue numbers
git push origin [yourBranchName]-#<issueNumber>


#On GitHub
-Go to pull requests.
-Click the green button "New Pull Request".
-Select [yourBranchName]-#<issueNumber> from the compare drop-down.
-You should see a green check-box and "Able to merge. These branches can be automatically merged."
-Click "Create pull request" (green button)


##After Branch is Merged, Update Your Master Again
git checkout master
git pull

    At this point you will typically start a new branch and the cycle begins again


<!-- See video here for a visual walkthrough of this: https://youtu.be/oFYyTZwMyAg -->


#OTHER HELPFUL THINGS

#Error Message
    If you get "fatal: The current branch footer has no upstream branch." Use:
git push --set-upstream origin [yourBranchName]-#<issueNumber>

#Deleting your local branch
git branch -D [yourBranchName]-#<issueNumber>

#Deleting the branch on git
    Can also be done manually on GitHub by clicking the trash can by your branch after clicking the branches option from the repository.
git push origin --delete [yourBranchName]-#<issueNumber>

#Stashing and Unstashing
    If you want to switch branches, but you don’t want to commit what you’ve been working on yet, you will need to stash the changes. To push a new stash onto your stack, run git stash:
git stash

    At this point, you can easily switch branches and do work elsewhere. Your changes are stored on your stack. To see which stashes you’ve stored, you can use git stash list
git stash list

    The command will show your stashes like this: 
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log

    In this case, two stashes were done previously, so you have access to three different stashed works. You can reapply you most recent stash using git stash apply
git stash apply

    If you want to apply one of the older stashes, you can specify it by naming it. Otherwise Git assumes the most recent stash
git stash apply stash@{2}. 