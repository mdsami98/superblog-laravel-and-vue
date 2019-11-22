<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-8">

                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title">Add New Category</h3>
                        </div>
                        <form action="">
                            <div class="card-body">
                                <label for="categoryName">Category Name</label>
                                <input id="categoryName" class="form-control form-control-lg" type="text" placeholder="Category Name">
                                <br>
                            </div>
                        <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-success">Save</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style scoped>

</style>
