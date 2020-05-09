<template>
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Users Table</h3>

                            <div class="card-tools">
                                <button class="btn btn-success" data-toggle="modal" data-target="#addNew">
                                    Add New User <i class="fas fa-user-plus f-w"></i>
                                </button>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div class="card-body table-responsive no-padding">
                            <table class="table table-hover">
                                <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Registerd At</th>
                                    <th>Modify</th>
                                </tr>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{user.id}}</td>
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td><span>{{user.type | capitalize}}</span></td>
                                    <td>{{user.created_at | dataFilter}}</td>
                                    <td>
                                        <a href="#" class=""> <i class="fa fa-edit blue"></i></a> /
                                        <a href="#" class=""> <i class="fa fa-trash red"></i></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addNewLabel">Add New</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="createUser">
                            <div class="modal-body">
                                <div class="form-group">
                                    <input v-model="form.name" type="text" name="name"
                                           placeholder="Enter User Name"
                                           class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                    <has-error :form="form" field="name"></has-error>
                                </div>
                                <div class="form-group">
                                    <input v-model="form.email" type="text" name="email"
                                           placeholder="Enter User Email"
                                           class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                    <has-error :form="form" field="email"></has-error>
                                </div>
                                <div class="form-group">
                                    <textarea v-model="form.bio" type="text" name="bio"
                                           placeholder="Enter User Bio"
                                              class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                                    <has-error :form="form" field="bio"></has-error>
                                </div>
                                <div class="form-group">
                                    <select v-model="form.type" name="type"
                                            class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                                        <option value="">Select User Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">Standard</option>
                                        <option value="author">Author</option>
                                    </select>
                                    <has-error :form="form" field="type"></has-error>
                                </div>
                                <div class="form-group">
                                    <input v-model="form.password" type="password" name="password"
                                           placeholder="Enter User password"
                                           class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                    <has-error :form="form" field="password"></has-error>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

    export default {
        name: "Users",
        data() {
            return {
                users : {},
              form: new Form({
                  name : '',
                  password: '',
                  email: '',
                  type: '',
                  bio: '',
                  photo: ''
              })
            };
        },
        methods: {
            loadUsers() {
                axios.get('api/users').then(({ data }) => (this.users = data.data));
            },
            createUser() {
                this.form.post('api/users');
            }
        },
        filters: {
            capitalize(value) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        },
        created() {
            this.loadUsers();
        }

    }
</script>

<style scoped>

</style>
