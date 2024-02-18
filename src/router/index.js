import { createWebHistory, createRouter } from "vue-router";
import Body from '../components/body';

/* Dashboards */
import Default from '../pages/dashboard/default';
import Ecommerce from '../pages/dashboard/ecommerce';
import Online from  '../pages/dashboard/online'
import Crypto from '../pages/dashboard/crypto'
import Social from '../pages/dashboard/social.vue'
// Widgets
import General from '../pages/widgets/general'
import Chart from '../pages/widgets/chart'
// pageLayout
import indexBoxed from '../pages/pageLayout/boxed/indexBoxed.vue'
import indexRTL from '../pages/pageLayout/RTL/indexRTL.vue'
import indexDarklayout from '../pages/pageLayout/darklayout/indexDarklayout.vue'
import indexFooterdark from '../pages/pageLayout/footerdark/indexFooterdark.vue'
import indexFooterfixed from '../pages/pageLayout/footerfixed/indexFooterfixed.vue'
import indexFooterlight from '../pages/pageLayout/footerlight/indexFooterlight.vue'
import indexHidenavscroll from '../pages/pageLayout/hidenavscroll/indexHidenavscroll.vue'
// project
import createProject from '../pages/project/createproject/createProject.vue'
import indexList from '../pages/project/projectlist/indexList.vue'
/* File Manager  */
import FileManager from '../pages/filemanager';
// kanban
import Kanban from '../pages/kanban/indexKanban.vue'
// ecoomerce
import indexProduct from '../pages/ecommerce/product/indexProduct.vue'
import productPage from '../pages/ecommerce/productpage/productPage.vue'
import productList from '../pages/ecommerce/list/productList.vue'
import paymentDetails from '../pages/ecommerce/payment/details/paymentDetails.vue'
import orderHistory from '../pages/ecommerce/order/orderHistory.vue'
import invoiceView from '../pages/ecommerce/invoice/invoiceView.vue'
import cartView from '../pages/ecommerce/cart/cartView.vue'
import wishlistView from '../pages/ecommerce/wishlist/wishlistView.vue'
import checkoutView from '../pages/ecommerce/checkout/checkoutView.vue'
import pricingView from '../pages/ecommerce/pricing/pricingView.vue'
// mail
import readMail from '../pages/email/readMail/readMail.vue'
import composeView from '../pages/email/compose/composeView.vue'
// chat
import chatApp from '../pages/chat/chatApp/chatApp.vue'
import videoChat from '../pages/chat/videoChat/videoChat.vue'
// user
import userProfile from '../pages/users/profile/userProfile.vue'
import userCards from '../pages/users/cards/userCards.vue'
import userEdit from '../pages/users/edit/userEdit.vue'
// forms
import formValidation from "../pages/forms/formValidetion/formValidation"
import base_Input from "../pages/forms/baseInput/base_Input"
import checkbox_radio from "../pages/forms/Checkbox&Radio/checkbox_radio"
import input_groups from "../pages/forms/InputGroup/input_groups"
import megaOptions from "../pages/forms/megaOptions/megaOptions"

// form widgets
import select2 from "../pages/formWidgets/select2/select2Page.vue"
import switch_From from "../pages/formWidgets/switch/switch_From"
import touchspin_Form from "../pages/formWidgets/touchspin/touchspin_Form"
import typeahead_Form from "../pages/formWidgets/typeahead/typeahead_Form"
import clipboard_Form from "../pages/formWidgets/clipboard/clipboard_Form"
import datepicker from "../pages/formWidgets/datepicker/datePicker.vue"

// form layput
import defaultforms from '../pages/formLayout/default/defaultFotrm.vue'
import form_wizard2 from "../pages/formLayout/formWizrd2/form_wizard.vue"
import form_wizard1 from '../pages/formLayout/formWizard1/form_wizard2.vue'
import form_wizard3 from "../pages/formLayout/formWizard3/form_wizard1.vue"

// uikits
import Scrollable from "../pages/advance/scollable/scrollable_advance.vue";
import Sweetalert from "../pages/advance/sweetalert/sweetAert.vue";
import Tree from "../pages/advance/tree/treeView.vue";
import Rating from "../pages/advance/rating/ratingView.vue";
import Pagination from "../pages/advance/pagination/pagination_advance.vue";
import Ribbons from "../pages/advance/ribbons/ribbons_advance.vue";
import Tour from "../pages/advance/tour/tourView.vue";

import Breadcrumb from "../pages/advance/breadcrumbs/breadCrumb.vue";

import Sticky from "../pages/advance/sticky/stickyView.vue";

import ImageCropper from "../pages/advance/image_cropper/cropper_advance.vue";
import Notify from '../pages/advance/notify/toaster_advance.vue'
import dropzone from '../pages/advance/dropzone/dropzoneView.vue';
import animatedModal from '../pages/advance/animatedModal/animatedModal.vue'
import owlCarousel from '../pages/advance/owlCarousel/owlCarousel.vue' 
import Rangeslider from '../pages/advance/range/rangeView.vue'
import BasicCard from '../pages/advance/basicCard/basicCard.vue'
import CreativeCard from '../pages/advance/creativeCard/creative_card.vue'
import DraggableCard from '../pages/advance/draggableCard/draggableCard.vue'
import TabbedCard from '../pages/advance/tabbedCard/tabbed_card.vue'
import timeLine from '../pages/advance/timeLine/timeLine.vue'
/* FAQ */
import Faq from '../pages/faq/faqIndex.vue';
// uikits
import alert from '../pages/uikits/alert';
import Helperclasses from '../pages/uikits/helper_classes';
import Avatars from '../pages/uikits/avatars';
import Grid from '../pages/uikits/grid';
import Tagpills from '../pages/uikits/tag_pills';
import Typography from '../pages/uikits/typography';
import Progressbar from '../pages/uikits/progress_bar';
import Modal from '../pages/uikits/modal';
import Popover from '../pages/uikits/popover';
import Tooltip from '../pages/uikits/tooltip';
import Spinners from '../pages/uikits/loader';
import Dropdown from '../pages/uikits/dropdown';
import Accordion from '../pages/uikits/accordion';
import Boxshadow from '../pages/uikits/box_shadow';
import Lists from '../pages/uikits/lists';
import bootstraptabPage from "../pages/uikits/tabs/bootstraptab/bootstraptabPage.vue";
import linetabPage from "../pages/uikits/tabs/linetab/linetabPage.vue";
// animation
import animate from '../pages/animation/animate/animatePage.vue'
import aos from '../pages/animation/aos/aosPage.vue'
import scroll from '../pages/animation/scroll/scrollPage.vue'
import wow from '../pages/animation/wow/wowPage.vue'
import tilt from '../pages/animation/tilt.vue'
// builder
import form1 from '../pages/builder/formBuilder1.vue'
import form2 from '../pages/builder/formBuilder2.vue'
/* icons */
import Flag from '../pages/icons/flag';
import Ico from '../pages/icons/ico_icon';
import Themify from '../pages/icons/themify_icon';
import Fontawesome from '../pages/icons/font_awesome';
import FeatherIcon from '../pages/icons/feather_icon';
import WhetherIcon from '../pages/icons/weather';
/* Buttons */
import Default_buttons from '../pages/button/Default/default_button.vue';
import Flat_buttons from '../pages/button/Flat/flat_button.vue';
import Edge_buttons from '../pages/button/Edge/edge_button.vue';
import Raised_buttons from '../pages/button/Raised/raised_button.vue';
import Group_buttons from '../pages/button/ButtonGroup/button_group.vue'; 
/*charts*/ 
import google_chart from "../pages/charts/googleChart/google_chart"
import apex_chart from "../pages/charts/ApexChart/apex_chart"
 import chartist_chart from "../pages/charts/chartist/chartist_chart.vue"
// knowledge
import knowledge from '../pages/Knowledgebase/index.vue'
import category_knowledge from '../pages/Knowledgebase/categoryKnowledge.vue'
import detail_knowledge from '../pages/Knowledgebase/detailsKnowledge.vue' 
// error
import Error400 from '../pages/error/error400';
import Error401 from '../pages/error/error401';
import Error403 from '../pages/error/error403';
import Error404 from '../pages/error/error404';
import Error500 from '../pages/error/error500';
import Error503 from '../pages/error/error503';

/* Support Ticket */
import Support from '../pages/support/support.vue';

/* Editor */
import SimpleEditor from '../pages/editor/simple_editor';
import CkEditor from '../pages/editor/ckeditor.vue';
/* Maps */
import GoogleMaps from '../pages/maps/google_map.vue';
import VueLeaflet from '../pages/maps/vue_leaflet.vue';
// learning
import learning_list from "../pages/learning/learninglist/learning_list"
import coursedetailed from "../pages/learning/courseDetailed"
// job Search
import job_list from "../pages/job/job-list/job_list"
import job_details from "../pages/job/job_details/job_details"
import job_apply from "../pages/job/job_apply/job_apply"
import job_card from "../pages/job/job_card/cardJob.vue"
// blog
import blog_detail from "../pages/blog/blog-details/blog_detail"
import blog_single from "../pages/blog/blog-single/blog_single"
import blog_add from "../pages/blog/blog-add/addBlog.vue"
// GALLERY
import grid_gallery from "../pages/gallery/grid_gallery"
import grid_desc from "../pages/gallery/grid_desc"
import hover_gallery from "../pages/gallery/hover-gallery/hover_gallery"
import masonry_gallery from "../pages/gallery/masonry-gallery/masonry_gallery"
import masonary_desc from "../pages/gallery/masonary_desc.vue"
/* Authentication */
import LoginOne from '../pages/authentication/login_one';
import LoginTwo from '../pages/authentication/login_two';
import LoginValidate from '../pages/authentication/login_validation.vue';
import LoginTooltip from '../pages/authentication/login_tooltip.vue'
import LoginSweetalert from '../pages/authentication/login_sweetalert.vue'

import RegisterImage from '../pages/authentication/register_image';
import RegisterImage2 from '../pages/authentication/register_image2';
import Unlock from '../pages/authentication/unlock';
import ForgetPassword from '../pages/authentication/forget_password';
import ResetPassword from '../pages/authentication/reset_password';
import Maintenance from '../pages/authentication/maintenance.vue'
/* Auth */
import login from '../auth/login';
import Register from '../auth/register';
// comingsoon
import ComingsoonImage from '../pages/comingsoon/comingsoon_image';
import ComingsoonSimple from '../pages/comingsoon/comingsoon_simple';
import ComingsoonVideo from '../pages/comingsoon/comingsoon_video';
// SAMPLE PAGE
import sample_page from "../pages/sample_page"
/* bootstrap tables */
import BootstrapBasic from "../pages/tables/bootstrapTable/basicTables/basic_tables.vue";
import tableComponent from "../pages/tables/bootstrapTable/stylingtable/styling_table.vue"
import DatatableBasic from "../pages/tables/dataTable/BasicInit/basic_Init.vue"
// searchPage
import serchIndex from "../pages/search/serchIndex.vue"
// bookmark
import Bookmark from "../pages/bookmark/bookMark.vue"
// contact 
import contactView from "../pages/contact/contactView.vue"
// task
import Task from "../pages/task/indexPage.vue"
// calendar
import Calendar from "../pages/calenderView.vue"
// social app
import socialPage from "../pages/socialApp/socialApp.vue"
// todo
import Todo from "../pages/todo/index.vue"
const routes = [
    {
        path: '/',
        component: Body,
    
        children: [
          {
            path: '',
            name: 'defaultRoot',
            component: Default,
            meta: {
              title: ' Admin template',
            }
          },
    
        ]
      },
    {
        path: '/dashboard',
        component: Body,
        children: [
        {
          path: 'default',
          name: 'default',
          component: Default,
          meta: {
            title: 'Default Dashboard | Admin template',
          }
        },
        {
          path: 'ecommerce',
          name: 'ecommerce',
          component: Ecommerce,
          meta: {
            title: 'Ecommerce Dashboard | Admin template',
          }
        },
        {
          path: 'online',
          name: 'online',
          component: Online,
          meta: {
            title: 'Online Dashboard | Admin template',
          }
        },
        {
          path: 'crypto',
          name: 'crypto',
          component: Crypto,
          meta: {
            title: 'Crypto Dashboard | Admin template',
          }
        },
        {
          path: 'social',
          name: 'social',
          component: Social,
          meta: {
            title: 'Social Dashboard | Admin template',
          }
        }
        ]
      },
      {
        path: '/widgets',
        component: Body,
        meta: {
          requiresAuth: true
        },
        children: [
        {
          path: 'general',
          name: 'general',
          component: General,
          meta: {
            title: 'general Dashboard | Admin template',
          }
        },
        {
          path: 'chart',
          name: 'chart',
          component: Chart,
          meta: {
            title: 'chart Dashboard | Admin template',
          }
        },
        ]
      },
      {
        path: '/pageLayout',
        component: Body,
        children: [
          {
            path: 'boxed',
            name: 'boxed',
            component: indexBoxed,
            meta: {
              title: 'Boxed | Admin template',
            }
          },
          {
            path: 'darklayout',
            name: 'darklayout',
            component: indexDarklayout,
            meta: {
              title: 'Dark Layout | Admin template',
            }
          }
          ,
          {
            path: 'footerdark',
            name: 'footerdark',
            component: indexFooterdark,
            meta: {
              title: 'Footer Dark | Admin template',
            }
          }
          ,
          {
            path: 'footerlight',
            name: 'footerlight',
            component: indexFooterlight,
            meta: {
              title: 'Footer Light | Admin template',
            }
          }
          ,
          {
            path: 'footerfixed',
            name: 'footerfixed',
            component: indexFooterfixed,
            meta: {
              title: 'Footer Fixed | Admin template',
            }
          }
          ,
          {
            path: 'hidenavscroll',
            name: 'hidenavscroll',
            component: indexHidenavscroll,
            meta: {
              title: 'Hide Nav Scroll | Admin template',
            }
          }
          ,
          {
            path: 'RTL',
            name: 'RTL',
            component: indexRTL,
            meta: {
              title: 'RTL | Admin template',
            }
          }
        ]
      },
      {
        path: '/project',
        component: Body,
        children: [
          {
            path: 'projectlist',
            name: 'projectlist',
            component: indexList,
            meta: {
              title: 'Project list | Admin template',
            }
          },
          {
            path: 'create-project',
            name: 'createProject',
            component: createProject,
            meta: {
              title: 'Create new | Admin template',
            }
          }
        ]
      },
      {
        path: '/app',
        component: Body,
        children: [
          {
            path: 'socialPage',
            name: 'socialPage',
            component: socialPage,
             meta: {
                title: 'Social App, | Admin template',
              }
          },
        {
          path: 'todo',
          name: 'todo',
          component: Todo,
           meta: {
              title: 'Todo | Admin template',
            }
        },
      
        {
          path: 'chat',
          name: 'chat',
          component: chatApp,
           meta: {
              title: 'Chat | Admin template',
            }
        },
        {
          path: 'videochat',
          name: 'Video chat',
          component: videoChat,
           meta: {
              title: 'Video Chat | Admin template',
            }
        },

        {
          path: 'filemanager',
          name: 'File Manager',
          component: FileManager,
           meta: {
              title: 'File Manager, | Admin template',
            }
        },
        {
          path: 'kanban',
          name: 'Kanban Board',
          component: Kanban,
           meta: {
              title: 'Kanban Board, | Admin template',
            }
        },
        {
          path: 'contact',
          component: contactView,
          name: 'contactView',
          meta: {
            title: 'Contacts | Admin template',
          }
        },
        {
          path:'bookmark',
          name:'Bookmark',
          component:Bookmark,
          meta: {
            title: 'Bookmark | Admin template',
          }
        },
        {
          path:'task',
          name:'Task',
          component:Task,
          meta: {
            title: 'Task | Admin template',
          }
        },
        {
          path:'calendar',
          name:'Calendar',
          component:Calendar,
          meta: {
            title: 'Calendar | Admin template',
          }
        }
        ]
      },
      {
        path: "/ecommerce",
        component: Body,
        children: [
          {
            path: "product",
            name: "Product",
            component: indexProduct,
            meta: {
              title: "Products | Admin template",
            },
          },
          {
            path: "product/page/:id",
            name: "ProductPage",
            component: productPage,
            meta: {
              title: "Products Page | Admin template",
            },
          },
          {
            path: "product/list",
            name: "productList",
            component: productList,
            meta: {
              title: "Products list | Admin template",
            },
          },
          {
            path: "payment/details",
            name: "paymentDetails",
            component: paymentDetails,
            meta: {
              title: "Payment Details | Admin template",
            },
          },
          {
            path: "order/history",
            name: "Order History",
            component: orderHistory,
            meta: {
              title: "OrderHistory | Admin template",
            },
          },
          {
            path: "invoice",
            name: "Invoice",
            component: invoiceView,
            meta: {
              title: "Invoice | Admin template",
            },
          },
          {
            path: "cart",
            name: "Cart",
            component: cartView,
            meta: {
              title: "Cart | Admin template", 
            },
          },
          {
            path: "wishlist",
            name: "Wishlist",
            component: wishlistView,
            meta: {
              title: "Wishlist | Admin template",
            },
          },
          {
            path: "checkout",
            name: "Checkout",
            component: checkoutView,
            meta: {
              title: "Checkout | Admin template",
            },
          },
          {
            path: "pricing",
            name: "pricing",
            component: pricingView,
            meta: {
              title: "pricingView | Admin template",
            },
          },
    
    
        ],
      },
      {
        path: '/email',
        component: Body,
        children: [
          {
            path: "readMail",
            name: "readMail",
            component: readMail,
            meta: {
              title: "Email App | Admin template",
            },
          },
          {
            path: "compose",
            name: "compose",
            component: composeView,
            meta: {
              title: "Email Compose | Admin template",
            },
          }
        ]
      },
      {
        path: '/users',
        component: Body,
        children: [
          {
            path: "profile",
            name: "profile",
            component: userProfile,
            meta: {
              title: "Users Profile | Admin template",
            },
          },
          {
            path: "edit",
            name: "edit",
            component: userEdit,
            meta: {
              title: "Users Edit | Admin template",
            },
          },
          {
            path: "cards",
            name: "cards",
            component: userCards,
            meta: {
              title: "Users Cards | Admin template",
            },
          }
        ]
      },
      {
        path:"/form",
        component:Body,
        children:[
          {
            path:"validation",
            name:"formValidation",
            component:formValidation,
            meta: {
              title: "Form Validation | Admin template",
            },
          },
          {
            path:"inputs",
            name:"basicInput",
            component:base_Input,
            meta: {
              title: "Base Inputs | Admin template",
            },
          },
          {
            path:"checkbox-radio",
            name:"checkbox & radio",
            component:checkbox_radio,
            meta: {
              title: "Checkbox & Radio | Admin template",
            },
          },
          {
            path:"input-groups",
            name:"input Groups",
            component:input_groups,
            meta: {
              title: "Input Groups | Admin template",
            },
          },
          {
            path:"mega-options",
            name:"megaOptions",
            component:megaOptions,
            meta: {
              title: "Mega Options | Admin template",
            },
          },
          {
            path:"select2",
            name:"select2",
            component:select2,
            meta: {
              title: "Select2 | Admin template",
            },
          },
          {
            path:"switch",
            name:"switch",
            component:switch_From,
            meta: {
              title: "Switch | Admin template",
            },
          },
          {
            path:"touchspin",
            name:"touchspin",
            component:touchspin_Form,
            meta: {
              title: "Touchspin | Admin template",
            },
          },
          {
            path:"typeahead",
            name:"typeahead",
            component:typeahead_Form,
            meta: {
              title: "Typeahead | Admin template",
            },
          },
          {
            path:"clipboard",
            name:"clipboard",
            component:clipboard_Form,
            meta: {
              title: "Clipboard | Admin template",
            },
          },
          {
            path:"wizard2",
            name:"form_wizard2",
            component:form_wizard2,
            meta: {
              title: "Form Wizard2 | Admin template",
            },
          },
          {
            path:"wizard1",
            name:"formwizard",
            component:form_wizard1,
            meta: {
              title: "Form Wizard1 | Admin template",
            },
          },
          {
            path:"wizard3",
            name:"formwizard3",
            component:form_wizard3,
            meta: {
              title: "Form Wizard3 | Admin template",
            },
          },
          {
            path:"defaultforms",
            name:"defaultforms",
            component:defaultforms,
            meta: {
              title: "Default Forms | Admin template",
            },
          },
          {
            path:"datepicker",
            name:"datepicker",
            component:datepicker,
            meta: {
              title: "Datepicker | Admin template",
            },
          },
          
        ]
      },
      {
        path: "/advance",
        component: Body,
        children: [
            {
                path: "scrollable",
                name: "Scrollable",
                component: Scrollable,
                meta: {
                    title: "Scrollable | Admin template",
                },
            },
            {
              path: "treeView",
              name: "Tree",
              component: Tree,
              meta: {
                  title: "Tree | Admin template",
              },
          },
            {
              path: "notify",
              name: "notify",
              component: Notify,
              meta: {
                  title: "Scrollable | Admin template",
              },
            },
            {
              path: "rating",
              name: "Rating",
              component: Rating,
              meta: {
                  title: "Rating | Admin template",
              },
          },
          {
            path: "dropzone",
            name: "dropzone",
            component: dropzone,
            meta: {
                title: "dropzone | Admin template",
            },
        },
        {
          path: "tour",
          name: "Tour",
          component: Tour,
          meta: {
              title: "Tour | Admin template",
          },
      },
            {
                path: "sweetalert",
                name: "Sweetalert",
                component: Sweetalert,
                meta: {
                    title: "Sweetalert | Admin template",
                },
            },
            {
              path: "animatedModal",
              name: "animatedModal",
              component: animatedModal,
              meta: {
                  title: "Sweetalert | Admin template",
              },
          },
          {
            path: "owlCarousel",
            name: "owlCarousel",
            component: owlCarousel,
            meta: {
                title: "Sweetalert | Admin template",
            },
        },
           
            {
                path: "ribbons",
                name: "Ribbons",
                component: Ribbons,
                meta: {
                    title: "Ribbons | Admin template",
                },
            },
            {
              path: "pagination",
              name: "Pagination",
              component: Pagination,
              meta: {
                  title: "Pagination | Admin template",
              },
          },
          {
            path: "breadcrumb",
            name: "Breadcrumb",
            component: Breadcrumb,
            meta: {
                title: "Breadcrumb | Admin template",
            },
        },
            {
                path: "range-slider",
                name: "Rangeslider",
                component: Rangeslider,
                meta: {
                    title: "Rangeslider | Admin template",
                },
            },
            {
              path: "image-cropper",
              name: "ImageCropper",
              component: ImageCropper,
              meta: {
                  title: "ImageCropper | Admin template",
              },
          },
            
            {
                path: "sticky",
                name: "Sticky",
                component: Sticky,
                meta: {
                    title: "Sticky | Admin template",
                },
            },
            {
              path: "basicCard",
              name: "basicCard",
              component: BasicCard,
              meta: {
                  title: "Sticky | Admin template",
              },
          },
          {
            path: "creativeCard",
            name: "creativeCard",
            component: CreativeCard,
            meta: {
                title: "Sticky | Admin template",
            },
        },
        {
          path: "TabbedCard",
          name: "TabbedCard",
          component: TabbedCard,
          meta: {
              title: "Sticky | Admin template",
          },
      },
      {
        path: "DraggableCard",
        name: "DraggableCard",
        component: DraggableCard,
        meta: {
            title: "Sticky | Admin template",
        },
    },
            {
                path: "timeline1",
                name: "timeline",
                component: timeLine,
                meta: {
                    title: "Toastr | Admin template",
                },
            },
        ],
    },
    {
      path:"/chart",
      component:Body,
      children:[
        {
          path:"google",
          name:"googlechart",
          component:google_chart,
          meta: {
            title: "Google Chart | Admin template",
        },
        },
        {
          path:"apexChart",
          name:"apexchart",
          component:apex_chart,
          meta: {
            title: "ApexChart | Admin template",
        },
        },
        {
          path:"chartist",
          name:"chartist",
          component:chartist_chart,
          meta: {
            title: "Chartist | Admin template",
        },
        },
  
      ]
    },
    {
      path: '/pages',
      component: Body,
      children:[
        {
          path:'/pages/faq',
          name:'Faq',
          component:Faq,
          meta: {
          title: 'Faq | Admin template',
        }
        },
          {
            path:'/pages/support',
            name:'Support',
            component:Support,
            meta: {
            title: 'Support | Admin template',
          }
          },
          {
            path:'sample-page',
            name:'sample-page',
            component:sample_page,
            meta: {
                title: 'sample-page | Admin template',
              }
          },
          {
      path:"search",
      name:"search",
      component:serchIndex
    },
        
      ]
    },
    {
      path: '/uikits',
      component: Body,
      children: [
      {
        path: 'alert',
        name: 'alert',
        component: alert,
        meta: {
          title: 'Alert | Admin template',
        }
      },
      {
        path: 'helper-classes',
        name: 'Helperclasses',
        component: Helperclasses,
        meta: {
          title: 'Helperclasses | Admin template',
        }
      },
      {
        path: 'avatars',
        name: 'Avatars',
        component: Avatars,
        meta: {
          title: 'Avatars | Admin template',
        }
      },
      {
        path: 'grid',
        name: 'Grid',
        component: Grid,
        meta: {
          title: 'Grid | Admin template',
        }
      },
      {
        path: 'tag-pills',
        name: 'Tagpills',
        component: Tagpills,
        meta: {
          title: 'Tagpills | Admin template',
        }
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography,
        meta: {
          title: 'Typography | Admin template',
        }
      },
      {
        path: 'progress-bar',
        name: 'Progressbar',
        component: Progressbar,
        meta: {
          title: 'Progressbar | Admin template',
        }
      },
      {
        path: 'modal',
        name: 'Modal',
        component: Modal,
        meta: {
          title: 'Modal | Admin template',
        }
      },
      {
        path: 'popover',
        name: 'Popover',
        component: Popover,
        meta: {
          title: 'Popover | Admin template',
        }
      },
      {
        path: 'tooltip',
        name: 'Tooltip',
        component: Tooltip,
        meta: {
          title: 'Tooltip | Admin template',
        }
      },
      {
        path: 'loader',
        name: 'Spinners',
        component: Spinners,
        meta: {
          title: 'Spinners | Admin template',
        }
      },
      {
        path: 'dropdown',
        name: 'Dropdown',
        component: Dropdown,
        meta: {
          title: 'Dropdown | Admin template',
        }
      },
      {
        path: 'accordion',
        name: 'Accordion',
        component: Accordion,
        meta: {
          title: 'Accordion | Admin template',
        }
      },
      {
        path: "bootstraptab",
        name: "bootstraptabPage",
        component: bootstraptabPage,
        meta: {
          title: "tab | Admin template",
        },
      },
      {
        path: "linetab",
        name: "linetabPage",
        component: linetabPage,
        meta: {
          title: "Accordion | Admin template",
        },
      },
      {
        path: 'box-shadow',
        name: 'Boxshadow',
        component: Boxshadow,
        meta: {
          title: 'Boxshadow | Admin template',
        }
      },
      {
        path: 'lists',
        name: 'Lists',
        component: Lists,
        meta: {
          title: 'Lists | Admin template',
        }
      }
      ]
    },
    {
      path: "/animation",
      component: Body,
      children: [
          {
              path: "animate",
              name: "animate",
              component: animate,
              meta: {
                  title: "animate | Admin template",
              },
          },
          {
            path: "scroll",
            name: "scroll",
            component: scroll,
            meta: {
                title: "scroll | Admin template",
            },
        },
          {
            path: "AOS",
            name: "aos",
            component: aos,
            meta: {
                title: "aos | Admin template",
            },
          },
     
        {
          path: "wow",
          name: "wow",
          component: wow,
          meta: {
              title: "wow | Admin template",
          },
      },
      {
        path: "tilt",
        name: "tilt",
        component: tilt,
        meta: {
            title: "tilt | Admin template",
        },
    },
        ],
    },
    {
      path:"/builder",
      component: Body,
      children:[
        {
          path: "form1",
          name: "Form Builder1",
          component: form1,
          meta: {
            title: "from1 | Admin template",
          },
        },
        {
          path: "form2",
          name: "Form Builder2",
          component: form2,
          meta: {
            title: "from2 | Admin template",
          },
        }
      ]
    },
    {
      path: '/icons',
      component: Body,
      children:[
      {
        path: 'flag',
        name: 'Flag',
        component: Flag,
         meta: {
            title: 'Flag | Admin template',
          }
      },
      {
        path: 'ico',
        name: 'Ico',
        component: Ico,
         meta: {
            title: 'Ico | Admin template',
          }
      },
      {
        path: 'themify',
        name: 'Themify',
        component: Themify,
         meta: {
            title: 'Themify | Admin template',
          }
      },
      {
        path: 'fontawesome',
        name: 'Fontawesome',
        component: Fontawesome,
         meta: {
            title: 'Fontawesome | Admin template',
          }
      },
      {
        path: 'feather_icon',
        name: 'FeatherIcon',
        component: FeatherIcon,
         meta: {
            title: 'FeatherIcon | Admin template',
          }
      },
      {
        path: 'whether',
        name: 'WhetherIcon',
        component: WhetherIcon,
         meta: {
            title: 'WhetherIcon | Admin template',
          }
      }
      ]
    },
    {
      path: '/buttons',
      component: Body,
      children:[
      {
        path: 'default',
        name: 'default_buttons',
        component: Default_buttons,
         meta: {
            title: 'Default_buttons | Admin template',
          }
      },
      {
        path: 'flat',
        name: 'flat_buttons',
        component: Flat_buttons,
         meta: {
            title: 'Flat_buttons | Admin template',
          }
      },
      {
        path: 'edge',
        name: 'edge_buttons',
        component: Edge_buttons,
         meta: {
            title: 'Edge_buttons | Admin template',
          }
      },
      {
        path: 'raised',
        name: 'raised_buttons',
        component: Raised_buttons,
         meta: {
            title: 'Raised_buttons | Admin template',
          }
      },
      {
        path: 'group',
        name: 'group_buttons',
        component: Group_buttons,
         meta: {
            title: 'Group_buttons | Admin template',
          }
      }
      ]
    },
    {
      path: '/knowledgebase',
      component: Body,
      children: [
        {
          path: "knowledgebase",
          name: 'knowledge',
          component: knowledge,
          meta: {
            title: 'Knowledgebase | Admin template',
          }
        },
        {
          path: 'category',
          name: 'category_knowledge',
          component: category_knowledge
        },
        {
          path: 'detail',
          name: 'detail_knowledge',
          component: detail_knowledge
        }
      ]
    },
    {
      path:'/error-400',
      name:'Error400',
      component:Error400,
      meta: {
          title: 'Error400 | Admin template',
        }
    },
    {
      path:'/error-401',
      name:'Error401',
      component:Error401,
      meta: {
          title: 'Error401 | Admin template',
        }
    },
    {
      path:'/error-403',
      name:'Error403',
      component:Error403,
      meta: {
          title: 'Error403 | Admin template',
        }
    },
    {
      path:'/error-404',
      name:'Error404',
      component:Error404,
      meta: {
          title: 'Error404 | Admin template',
        }
    },
    {
      path:'/error-500',
      name:'Error500',
      component:Error500,
      meta: {
          title: 'Error500 | Admin template',
        }
    },
    {
      path:'/error-503',
      name:'Error503',
      component:Error503,
      meta: {
          title: 'Error503 | Admin template',
        }
    },
    {
      path:'/authentication/login/one',
      name:'LoginOne',
      component:LoginOne,
      meta: {
          title: 'LoginOne | Admin template',
        }
    },
    {
      path:'/authentication/login/two',
      name:'LoginTwo',
      component:LoginTwo,
      meta: {
          title: 'LoginTwo | Admin template',
        }
    },
    {
      path:'/authentication/login/validate',
      name:'LoginValidate',
      component:LoginValidate,
      meta: {
          title: 'LoginValidate | Admin template',
        }
    },
    {
      path:'/authentication/login/tooltip',
      name:'LoginTooltip',
      component:LoginTooltip,
      meta: {
          title: 'LoginTooltip | Admin template',
        }
    },
    {
      path:'/authentication/login/sweetalert',
      name:'LoginSweetalert',
      component:LoginSweetalert,
      meta: {
          title: 'LoginTooltip | Admin template',
        }
    },
    {
      path:'/authentication/register/image',
      name:'RegisterImage',
      component:RegisterImage,
      meta: {
          title: 'RegisterImage | Admin template',
        }
    },
    {
      path:'/authentication/register/image2',
      name:'RegisterImage2',
      component:RegisterImage2,
      meta: {
          title: 'RegisterImage2 | Admin template',
        }
    },
    {
      path:'/authentication/unlockuser',
      name:'Unlock',
      component:Unlock,
      meta: {
          title: 'Unlock | Admin template',
        }
    },
    {
      path:'/authentication/forgetpassword',
      name:'ForgetPassword',
      component:ForgetPassword,
      meta: {
          title: 'ForgetPassword | Admin template',
        }
    },
    {
      path:'/authentication/resetpassword',
      name:'ResetPassword',
      component:ResetPassword,
      meta: {
          title: 'ResetPassword | Admin template',
        }
    },
    {
      path:'/authentication/maintenance',
      name:'Maintenance',
      component:Maintenance,
      meta: {
          title: 'ResetPassword | Admin template',
        }
    },
    {
      path:'/comingsoon/comingsoon-image',
      name:'ComingsoonImage',
      component:ComingsoonImage,
      meta: {
          title: 'ComingsoonImage | Admin template',
        }
    },
    {
      path:'/comingsoon/comingsoon-simple',
      name:'ComingsoonSimple',
      component:ComingsoonSimple,
      meta: {
          title: 'ComingsoonSimple | Admin template',
        }
    },
    {
      path:'/comingsoon/comingsoon-video',
      name:'ComingsoonVideo',
      component:ComingsoonVideo,
      meta: {
          title: 'ComingsoonVideo | Admin template',
        }
    },
 
    {
      path: '/editor',
      component: Body,
      children:[
        {
          path: 'simple-editor',
          name: 'SimpleEditor',
          component:SimpleEditor,
          meta: {
            title: 'SimpleEditor | Admin template',
          }
        },
        {
          path: 'ck-editor',
          name: 'CkEditor',
          component:CkEditor,
           meta: {
            title: 'CkEditor | Admin template',
          }
          
        }
      ]
    },
    {
      path:'/maps',
      component: Body,
      children:[
        {
          path: 'vue-google-maps',
          name: 'GoogleMaps',
          component:GoogleMaps,
           meta: {
            title: 'oogleMaps | Admin template',
          }
        },
        {
          path: 'vue-leaflet-maps',
          name: 'VueLeaflet',
          component:VueLeaflet,
           meta: {
            title: 'ueLeaflet | Admin template',
          }
        }
      ]
    },
    {
      path:"/learning",
      component:Body,
      children:[
        {
          path:"list",
          name:"learninglist",
          component:learning_list,
          meta: {
            title: 'Learning List | Admin template',
          }
        },
        {
          path:"details/:id",
          name:"coursedetailed",
          component:coursedetailed,
          meta: {
            title: 'Detailed Course | Admin template',
          }
        }
      ]
    },
    {
      path:"/job",
      component:Body,
      children:[
        {
          path:"card",
          name:"cardview",
          component:job_card,
          meta: {
            title: 'Card View | Admin template',
          }
        },
        {
          path:"list",
          name:"listview",
          component:job_list,
          meta: {
            title: 'List View | Admin template',
          }
        },
        {
          path:"/job/details/:id",
          name:"jobdetails",
          component:job_details,
          props:true,
          meta: {
            title: 'Job Details | Admin template',
          }
        },
        {
          path:"apply/:id",
          name:"jobapply",
          component:job_apply,
          meta: {
            title: 'Apply | Admin template',
          }
        }
      ]},
      {
        path:"/blog",
        component:Body,
        children:[
          {
            path:"details",
            name:"blog-detail",
            component:blog_detail,
            meta: {
              title: 'Blog Details | Admin template',
            }
          },
          {
            path:"single",
            name:"blog_single",
            component:blog_single,
            meta: {
              title: 'Blog Single | Admin template',
            }
          },
          {
            path:"add",
            name:"blog_add",
            component:blog_add,
            meta: {
              title: 'Add Blog | Admin template',
            }
          }
          
        ]
      },
      {
        path:"/gallery",
        component:Body,
        children:[
          {
            path:"grid-gallery",
            name:"gridgallery",
            component:grid_gallery,
            meta: {
              title: 'Grid Gallery | Admin template',
            }
          },
          {
            path:"gallery-desc",
            name:"griddesc",
            component:grid_desc,
            meta: {
              title: 'Grid Gallery With Desc | Admin template',
            }
          },
          {
            path:"hover-effect",
            name:"hovergallery",
            component:hover_gallery,
            meta: {
              title: 'Hover Effect | Admin template',
            }
          },
          {
            path:"gallery-masonary",
            name:"masonry-gallery",
            component:masonry_gallery,
            meta: {
              title: 'Masonary Gallery | Admin template',
            }
          },
          {
            path:"gallery-masonary-desc",
            name:"masonary-desc",
            component:masonary_desc,
            meta: {
              title: 'Masonary Gallery Desc | Admin template',
            }
          }
      
        ]
      },
      {
        path: '/auth',
        children: [
        {
          path: 'login',
          name: 'Login 1',
          component: login,
          meta: {
            title: ' login | Admin template',
          }
        },
        {
          path: 'register',
          name: 'register 1',
          component: Register,
          meta: {
            title: ' Register | Admin template',
          }
        }
        ]
      },
      {
        path:"/table",
        component:Body,
        children:[
          {
            path:"basic",
            name:"basic1",
            component:BootstrapBasic,
            meta: {
              title: ' Basic Tables | Admin template',
            }
          },
          {
            path:"tableComponent",
            name:"tableComponent",
            component:tableComponent,
            meta: {
              title: ' Table Components | Admin template',
            }
          },
          
          {
            path:"/datatable-basic",
            name:"datatable",
            component:DatatableBasic,
            meta: {
              title: ' Basic Init | Admin template',
            }
          },
     
        ]
      },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  router.beforeEach((to, from, next) => {
    if(to.meta.title)
      document.title = to.meta.title;
    const  path = ['/auth/login','/auth/register'];
     if(path.includes(to.path) || localStorage.getItem('User')){
      return next();
     }
     next('/auth/login');
});
  export default router
