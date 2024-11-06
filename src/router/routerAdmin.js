// router/admin/routes.js
import SigninView from "@/views/admin/Authentication/SigninView.vue";
import SignupView from "@/views/admin/Authentication/SignupView.vue";
import ECommerceView from "@/views/admin/Dashboard/ECommerceView.vue";
import SettingsView from "@/views/admin/Admin/SettingsView.vue";
import ProfileView from "@/views/admin/ProfileView.vue";
import OrderView from "@/views/admin/OrderView.vue";
import ListProductView from "@/views/admin/Products/ListProductView.vue";
import AddProductView from "@/views/admin/Provider/AddProductView.vue";
import ListProviderView from "@/views/admin/Provider/ListProviderView.vue";
import OrderProviderView from "@/views/admin/Provider/OrderProviderView.vue";
import CategoryPostView from "@/views/admin/Post/CategoryPostView.vue";
import ListPostView from "@/views/admin/Post/ListPostView.vue";
import CategoryProductView from "@/views/admin/Products/CategoryProductView.vue";
import AdminPermissionView from "@/views/admin/Admin/AdminPermissionView.vue";
import CommentView from "@/views/admin/Comment/CommentView.vue";
import CustomerView from "@/views/admin/Customer/CustomerView.vue";
import RoleAdminView from "@/views/admin/Admin/AdminRoleView.vue";

export const adminRoutes = [


  // Admin routes
  {
    path: "/admin/",
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "eCommerce",
        component: ECommerceView,
        meta: { title: "eCommerce Dashboard" },
      },
      {
        path: "order",
        name: "order",
        component: OrderView,
        meta: { title: "Order" },
      },
      {
        path: "profile",
        name: "admin-profile",
        component: ProfileView,
        meta: { title: "Profile" },
      },
      {
        path: "auth",
        children: [
          {
            path: "signin",
            name: "signin",
            component: SigninView,
            meta: { title: "Signin" },
          },
          {
            path: "signup",
            name: "signup",
            component: SignupView,
            meta: { title: "Signup" },
          },
        ],
      },
      {
        path: "products",
        children: [
          {
            path: "list",
            name: "listproduct",
            component: ListProductView,
            meta: { title: "Products" },
          },
          {
            path: "categories",
            name: "categoryproduct",
            component: CategoryProductView,
            meta: { title: "Product Categories" },
          },
        ],
      },
      {
        path: "provider",
        children: [
          {
            path: "import",
            name: "importproduct",
            component: AddProductView,
            meta: { title: "Import Products" },
          },
          {
            path: "list",
            name: "providers",
            component: ListProviderView,
            meta: { title: "Providers List" },
          },
          {
            path: "orders",
            name: "provider",
            component: OrderProviderView,
            meta: { title: "Provider Orders" },
          },
        ],
      },
      {
        path: "posts",
        children: [
          {
            path: "categories",
            name: "categorypost",
            component: CategoryPostView,
            meta: { title: "Post Categories" },
          },
          {
            path: "list",
            name: "posts",
            component: ListPostView,
            meta: { title: "Posts List" },
          },
        ],
      },
      {
        path: "comments",
        name: "comment",
        component: CommentView,
        meta: { title: "Comments Management" },
      },
      {
        path: "customers",
        name: "customer",
        component: CustomerView,
        meta: { title: "Customers Management" },
      },
      {
        path: "users",
        children: [
          {
            path: "settings",
            name: "settings",
            component: SettingsView,
            meta: { title: "User Settings" },
          },
          {
            path: "roles",
            name: "role",
            component: RoleAdminView,
            meta: { title: "User Roles" },
          },
          {
            path: "permissions",
            name: "permission",
            component: AdminPermissionView,
            meta: { title: "User Permissions" },
          },
        ],
      },
      
    ],
  },
];
