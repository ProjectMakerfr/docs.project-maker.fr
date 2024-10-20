import git
import os

# Liste des dépôts (URL GitHub et chemins locaux)
REPOS = [
    # {
    #     "name": "API Project Maker",
    #     "repo_url": "https://github.com/ProjectMakerfr/api.project-maker.fr.git",
    #     "local_path": "api.project-maker.fr",
    #     "branch": "main"
    # },
    # {
    #     "name": "Dashboard Project Maker",
    #     "repo_url": "https://github.com/ProjectMakerfr/dash.project-maker.fr.git",
    #     "local_path": "dash.project-maker.fr",
    #     "branch": "main"
    # },
    {
        "name": "Documentation Project Maker",
        "repo_url": "https://github.com/ProjectMakerfr/docs.project-maker.fr.git",
        "local_path": "docs.project-maker.fr",
        "branch": "main"
    },
    # {
    #     "name": "Project Maker Website",
    #     "repo_url": "https://github.com/ProjectMakerfr/project-maker.fr.git",
    #     "local_path": "project-maker.fr",
    #     "branch": "main"
    # }
]

# Fonction pour cloner un dépôt si ce n'est pas déjà fait
def clone_repo(repo_url, local_path):
    if not os.path.exists(local_path):
        print(f"Clonage du dépôt {repo_url} dans {local_path}...")
        git.Repo.clone_from(repo_url, local_path)
        print(f"Clonage de {repo_url} terminé.")
    else:
        print(f"Le dépôt {repo_url} existe déjà à l'emplacement {local_path}.")

# Fonction pour effectuer un pull
def pull_repo(local_path, branch='main'):
    repo = git.Repo(local_path)
    origin = repo.remotes.origin
    print(f"Pulling les dernières modifications depuis {branch} dans {local_path}...")
    origin.pull(branch)
    print(f"Pull de {local_path} terminé.")

# Fonction pour ajouter des fichiers, effectuer un commit et push
def add_commit_push(local_path, commit_message, branch='main'):
    repo = git.Repo(local_path)

    # Ajouter tous les nouveaux fichiers et modifications
    repo.git.add('--all')

    # Vérifier s'il y a des modifications à commettre
    if repo.is_dirty():
        print(f"Des modifications ont été détectées dans {local_path}.")
        repo.index.commit(commit_message)
        origin = repo.remotes.origin
        print(f"Pushing les changements depuis {local_path} vers {branch}...")
        origin.push(branch)
        print(f"Push depuis {local_path} terminé.")
    else:
        print(f"Aucune modification à commettre dans {local_path}.")

# Fonction pour traiter tous les dépôts
def process_repos(repos, commit_message):
    for repo_info in repos:
        print(f"\n--- Début du traitement du dépôt: {repo_info['name']} ---")

        # Cloner le dépôt s'il n'est pas déjà cloné
        # clone_repo(repo_info['repo_url'], repo_info['local_path'])

        # Pull les dernières modifications
        pull_repo(repo_info['local_path'], repo_info['branch'])

        # Ajouter des fichiers, effectuer un commit et push
        add_commit_push(repo_info['local_path'], commit_message, repo_info['branch'])

        print(f"--- Fin du traitement du dépôt: {repo_info['name']} ---\n")


if __name__ == "__main__":
    # Message de commit à utiliser pour tous les dépôts
    commit_message = "Mise à jour automatique des fichiers."

    # Lancer le traitement pour tous les dépôts
    process_repos(REPOS, commit_message)
