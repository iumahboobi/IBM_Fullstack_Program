from flask import Flask, request, flash, redirect, render_template, url_for

import secrets

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)


users = {
    1: {"id": 1, "name": "John Doe", "email": "john@example.com"},
    2: {"id": 2, "name": "Jane Smith", "email": "jane@example.com"},
    3: {"id": 3, "name": "Alice Johnson", "email": "alice@example.com"},
}
next_id = 4


# List all users


@app.route("/")
def home():
    return render_template("home.html", user_count=len(users))


@app.route("/users")
def list_users():
    return render_template("list.html", users=users)


# Create a new User
@app.route("/create", methods=["GET", "POST"])
def create_user():

    global next_id

    if request.method == "POST":

        # if email exists. we first take the request email
        # and match it with existing email

        new_email = request.form["email"]

        # check if email exists

        if any(user["email"] == new_email for user in users.values()):
            flash("Email already exists")
            return redirect("/create")

        users[next_id] = {
            "id": next_id,
            "name": request.form["name"],
            "email": request.form["email"],
        }
        next_id += 1

        return redirect("/users")

    # Show the form for GET requests
    return render_template("create.html")


# User detail view


@app.route("/users/<int:user_id>")
def user_detail(user_id):
    user = users.get(user_id)
    if not user:
        flash("User not found")
        return redirect(url_for("list_users"))
    return render_template("view.html", user=user)


# Update User


@app.route("/users/<int:user_id>/update", methods=["POST", "GET"])
def update_user(user_id):
    "Handle user update"
    user = users.get(user_id)

    if not user:
        flash(f"User {user} not found", "error")
        return redirect(url_for("list_users"))

    # Handle Form Submission

    if request.method == "POST":
        new_email = request.form["email"]

        # Check if Email already exists
        if any(u["email"] == new_email and u["id"] != user_id for u in users.values()):
            flash("Email already exists", "error")
            return redirect(url_for("update_user", user_id=user_id))

        # Update the data
        user["name"] = request.form["name"]
        user["email"] = new_email
        flash("User Updated Successfully", "success")
        return redirect(url_for("user_detail", user_id=user_id))

    # Show the form for GET requests
    return render_template("update.html", user=user)


# Now deleting user


@app.route("/users/<int:user_id>delete", methods=["POST"])
def delete_user(user_id):

    user = users.get(user_id)

    if not user:
        flash(f"No such user {user}", "error")
        return redirect(url_for("list_users"))

    # Remove user from dictionary
    del users[user_id]
    flash(f"User {user['name']} deleted successfully", "success")
    return redirect(url_for("list_users"))


if __name__ == "__main__":
    app.run(debug=True)
