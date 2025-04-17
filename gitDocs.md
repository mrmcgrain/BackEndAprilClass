# Github Repository Flow

## Class Repository

In every class, a dedicated repository is set up to house class materials and assignments. The instructors are responsible for maintaining this repository. Here's how the process works:

1. **GitHub Access**: Before the cohort begins, instructors will compile a list of GitHub usernames to be added to the Persevere Organization and the class collaborator team.

2. **Assignment Preparation**: Prior to the start of each class, instructors will ensure that the assignments are available in the repository. They will also upload any necessary materials.

3. **Student Initialization**: At the beginning of each day, students are expected to execute a `git pull` command from their terminal to retrieve the latest materials.

### File Organization

To maintain consistency across students' development environments, a standardized file organization structure is followed:

- **Persevere Umbrella Folder**: Students are required to create an umbrella folder called "Persevere" on their Desktop.

Inside the "Persevere" folder, the file structure should be as follows:

- `persevereCode`
  - `homework`
  - `in-classWork`
  - `projects`
  - `classRepository`

Students are responsible for organizing their files within these folders and copying materials from the classRepository folder into their working directories.

## Student Git Flow

Students are expected to follow a specific Git flow when working on assignments, whether they are in-class or homework. Here's the step-by-step process:

1. **Navigate to Class Repo**: In the terminal, navigate to the class repository located at `/Desktop/persevereCode/classRepo`.

2. **Update Class Repo**: Execute the `git pull` command to ensure that you have the latest materials from the class repository.

3. **Select Assignment Folder**: Navigate to the appropriate folder for the specific assignment you are working on.

4. **Create Personal Repository**: Use the `gh repo create` command to create a new personal repository. Follow the prompts to name the repository and clone it down to your local environment.

5. **Copy Assignment Contents**: Whether through the command line or file explorer, copy the contents of the assignment from the class repository and paste them into your newly created personal repository.

6. **Stage Files**: utilize the `git add <files that have changed` command to stage the files for commit.

7. **Commit Changes**: Use `git commit -m "<commit message here>"` to make a commit with your staged changes.

8. **Push Your commits**: `git push` to put the commits/changes on Github servers.

    8a. **Add Upstream**: If the terminal is warning you that you do not have an upstream, us the  command given: `git push --set-upstream origin master`

9. **Copy Repo URL**: Copy the URL in the search bar and post into the assignment.

By following this workflow, students can efficiently manage assignments, maintain version control, and collaborate effectively within the GitHub-based learning environment.
