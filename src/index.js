import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";


import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Switcherlayout = React.lazy(()=>import("./components/switcherlayout"));
//App
const App = React.lazy(() => import("./components/app"));
const Custompages = React.lazy(() => import("./components/custompages"));

//Dashboard
const Dashboard = React.lazy(()=> import("./components/Dashboard/Dashboard"));
//Widgets
const Widgets = React.lazy(()=> import("./components/Widgets/Widgets"));


/*
//Components
const CardDesign = React.lazy(() =>import("./components/Components/CardDesign/CardDesign"));
const ContentScrollBar = React.lazy(()=>import("./components/Components/ContentScrollBar/ContentScrollBar"));
const Counters = React.lazy(()=>import("./components/Components/Counters/Counters"));
const DefaultCalendar = React.lazy(()=>import("./components/Components/DefaultCalendar/DefaultCalendar"));
const DefaultChat = React.lazy(()=>import("./components/Components/DefaultChat/DefaultChat"));
const FullCalendar = React.lazy(()=>import("./components/Components/FullCalendar/FullCalendar"));
const Loader = React.lazy(()=>import("./components/Components/Loaders/Loaders"));
const Notifications = React.lazy(()=>import("./components/Components/Notifications/Notifications"));
const RangeSlider = React.lazy(()=>import("./components/Components/RangeSlider/RangeSlider"));
const Rating = React.lazy(()=>import("./components/Components/Rating/Rating"));
const SweetAlerts = React.lazy(()=>import("./components/Components/SweetAlerts/SweetAlerts"));
const Timeline = React.lazy(()=>import("./components/Components/Timeline/Timeline"));
const Treeview = React.lazy(()=>import("./components/Components/Treeview/Treeview"));
//Elements
const Alerts = React.lazy(() => import("./components/Elements/Alerts/Alerts"));
const AvatarRounded = React.lazy(()=>import("./components/Elements/AvatarRounded/AvatarRounded"));
const AvatarSquares = React.lazy(()=>import("./components/Elements/AvatarSquares/AvatarSquares"));
const AvatarRadius = React.lazy(()=>import("./components/Elements/AvatarRadius/AvatarRadius"));
const Badges = React.lazy(()=>import("./components/Elements/Badges/Badges"));
const Buttons = React.lazy(()=>import("./components/Elements/Buttons/Buttons"));
const Breadcrumbs = React.lazy(()=>import("./components/Elements/Breadcrumbs/Breadcrumbs"));
const Colors = React.lazy(()=>import("./components/Elements/Colors/Colors"));
const DropDowns = React.lazy(()=>import("./components/Elements/DropDowns/DropDowns"));
const List = React.lazy(()=>import("./components/Elements/List/List"));
const Navigation = React.lazy(()=>import("./components/Elements/Navigation/Navigation"));
const Paginations = React.lazy(()=>import("./components/Elements/Paginations/Paginations"));
const Panels = React.lazy(()=>import("./components/Elements/Panels/Panels"));
const Tags = React.lazy(()=>import("./components/Elements/Tags/Tags"));
const Thumbnails = React.lazy(()=>import("./components/Elements/Thumbnails/Thumbnails"));
const Typography = React.lazy(()=>import("./components/Elements/Typography/Typography"));
//Advanced-Elements
const Mediaobject = React.lazy(() =>import("./components/Advanced-Elements/Mediaobject/Mediaobject"));
const Accordions = React.lazy(()=>import("./components/Advanced-Elements/Accordion/Accordions"));
const Carousels = React.lazy(()=>import("./components/Advanced-Elements/Carousel/Carousels"));
const Charts = React.lazy(()=>import("./components/Advanced-Elements/Charts/Charts"));
const Cryptocurrencies = React.lazy(()=>import("./components/Advanced-Elements/Crypto-currencies/Crypto-currencies"));
const Footer = React.lazy(()=>import("./components/Advanced-Elements/Footers/Footers"));
const Header = React.lazy(()=>import("./components/Advanced-Elements/Headers/Headers"));
const Modal = React.lazy(()=>import("./components/Advanced-Elements/Modal/Modal"));
const Progress = React.lazy(()=>import("./components/Advanced-Elements/Progress/Progress"));
const Search = React.lazy(()=>import("./components/Advanced-Elements/Search/Search"));
const Tabs = React.lazy(()=>import("./components/Advanced-Elements/Tabs/Tabs"));
const UserList = React.lazy(()=>import("./components/Advanced-Elements/UserList/UserList"));
const TooltipandPopover = React.lazy(()=>import("./components/Advanced-Elements/TooltipandPopover/TooltipandPopover"));
//Charts
const ChartJs = React.lazy(() => import("./components/Charts/ChartJs/ChartJs"));
const PieCharts = React.lazy(()=>import("./components/Charts/PieCharts/PieCharts"));
const Echarts = React.lazy(()=>import("./components/Charts/Echarts/Echarts"));
const Nvd3charts = React.lazy(()=>import("./components/Charts/Nvd3Charts/Nvd3charts"));
//Table
const DefaultTables = React.lazy(() =>import("./components/Table/DefaultTables/DefaultTables"));
const DataTables = React.lazy(()=>import("./components/Table/DataTables/DataTables"));
//Form
const FormElements = React.lazy(() =>import("./components/Form/FormElements/FormElements"));
const FormAdvanced = React.lazy(()=>import("./components/Form/FormAdvanced/FormAdvanced"));
const FormEditor = React.lazy(()=>import("./components/Form/FormEditor/FormEditor"));
const FormValidation = React.lazy(()=>import("./components/Form/FormValidation/FormValidation"));
const FormWizard = React.lazy(()=>import("./components/Form/FormWizard/FormWizard"));
//Icons
const FontAwesome = React.lazy(() =>import("./components/Icons/FontAwesomes/FontAwesomes"));
const MaterialDesignIcons = React.lazy(()=>import("./components/Icons/MaterialDesignIcons/MaterialDesignIcons"));
const SimpleLineIcons = React.lazy(()=>import("./components/Icons/SimplelineIcons/SimplelineIcons"));
const FeatherIcons = React.lazy(()=>import("./components/Icons/FeatherIcons/FeatherIcons"));
const IonicIcons = React.lazy(()=>import("./components/Icons/IonicIcons/IonicIcons"));
const FlagIcons = React.lazy(()=>import("./components/Icons/FlagsIcons/FlagsIcons"));
const Pe7Icons = React.lazy(()=>import("./components/Icons/Pe7Icons/Pe7Icons"));
const ThemifyIcons = React.lazy(()=>import("./components/Icons/ThemifyIcons/ThemifyIcons"));
const TypiconsIcons = React.lazy(()=>import("./components/Icons/TypiconsIcons/TypiconsIcons"));
const WeatherIcons = React.lazy(()=>import("./components/Icons/WeatherIcons/WeatherIcons"));
//pages
const Profile = React.lazy(() => import("./components/pages/Profile/Profile"));
const EditProfile = React.lazy(()=>import("./components/pages/EditProfile/EditProfile"));
const MailInbox = React.lazy(()=>import("./components/pages/MailInbox/MailInbox"));
const MailCompose = React.lazy(()=>import("./components/pages/MailCompose/MailCompose"));
const Gallery = React.lazy(()=>import("./components/pages/Gallery/Gallery"));
const AboutCompany = React.lazy(()=>import("./components/pages/AboutCompany/AboutCompany"));
const Services = React.lazy(()=>import("./components/pages/Services/Services"));
const FAQS = React.lazy(()=>import("./components/pages/FAQS/FAQS"));
const Terms = React.lazy(()=>import("./components/pages/Terms/Terms"));
const Invoice = React.lazy(()=>import("./components/pages/Invoice/Invoice"));
const PricingTables = React.lazy(()=>import("./components/pages/PricingTables/PricingTables"));
const Empty = React.lazy(()=>import("./components/pages/Empty/Empty"));
const UnderConstruction = React.lazy(()=>import("./components/pages/UnderConstruction/UnderConstruction"));
//Blog
const Blog = React.lazy(() => import("./components/pages/Blog/Blog/Blog"));
const BlogDetails = React.lazy(()=>import("./components/pages/Blog/BlogDetails/BlogDetails"));
const BlogPost = React.lazy(()=>import("./components/pages/Blog/BlogPost/BlogPost"));
//Maps
const LeafletMaps = React.lazy(() =>import("./components/Maps/LeafletMaps/LeafletMaps"));
const VectorMaps = React.lazy(()=>import("./components/Maps/VectorMaps/VectorMaps"));
//E-Commerce
const Shop = React.lazy(() =>import("./components/pages/E-Commerce/Shop/Shop"));
const Checkout = React.lazy(()=>import("./components/pages/E-Commerce/Checkout/Checkout"));
const ProductDetails = React.lazy(()=>import("./components/pages/E-Commerce/ProductDetails/ProductDetails"));
const ShoppingCarts = React.lazy(()=>import("./components/pages/E-Commerce/ShoppingCarts/ShoppingCarts"));
const Wishlist = React.lazy(()=>import("./components/pages/E-Commerce/Wishlist/Wishlist"));
//FileManger
const FileManager = React.lazy(()=>import("./components/pages/FileManager/FileManager/FileManager"));
const FileAttachments = React.lazy(()=>import("./components/pages/FileManager/FileAttachments/FileAttachments"));
const FileDetails = React.lazy(()=>import("./components/pages/FileManager/FileDetails/FileDetails"));
const FileManagerList = React.lazy(()=>import("./components/pages/FileManager/FileManagerList/FileManagerList"));

//custom Pages
const Login = React.lazy(()=>import("./components/CustomPages/Login/Login"));
const Register = React.lazy(()=>import("./components/CustomPages/Register/Register"));
const ForgotPassword = React.lazy(()=>import("./components/CustomPages/ForgotPassword/ForgotPassword"));
const LockScreen = React.lazy(()=>import("./components/CustomPages/LockScreen/LockScreen"));
//Errorpages
const Errorpage400 = React.lazy(()=>import("./components/ErrorPages/ErrorPages/400/400"));
const Errorpage401 = React.lazy(()=>import("./components/ErrorPages/ErrorPages/401/401"));
const Errorpage403 = React.lazy(()=>import("./components/ErrorPages/ErrorPages/403/403"));
const Errorpage500 = React.lazy(()=>import("./components/ErrorPages/ErrorPages/500/500"));
const Errorpage503 = React.lazy(()=>import("./components/ErrorPages/ErrorPages/503/503"));
*/

const Loaderimg = () => {
  return (
    <div id="global-loader">
      <img
        src={require("./assets/images/loader.svg").default}
        className="loader-img"
        alt="Loader"
      />
    </div>
  );
};
const Root = () => {
  return (
    <Fragment>
      <BrowserRouter>
      <React.Suspense fallback={Loaderimg()}>
        <Routes>



          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<App />}
          >

            <Route index element={<Dashboard />} />

            <Route
              path={`${process.env.PUBLIC_URL}/dashboard`}
              element={<Dashboard />}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/widgets`}
              element={<Widgets />}
            />

            {/*
            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/components/cardsDesign`}
                element={<CardDesign />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/components/defaultCalendar`}
                element={<DefaultCalendar />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/components/fullCalendar`}
                element={<FullCalendar />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/components/defaultChat`}
                element={<DefaultChat />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/components/notifications`}
                element={<Notifications />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/components/sweetAlerts`}
                element={<SweetAlerts />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/components/rangeSlider`}
                element={<RangeSlider />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/components/contentScrollBar`}
                element={<ContentScrollBar />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/components/loader`}
                element={<Loader />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/components/counters`}
                element={<Counters />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/components/rating`}
                element={<Rating />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/components/timeline`}
                element={<Timeline />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/components/treeview`}
                element={<Treeview />}
              />
            </Route>



            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/elements/alerts`}
                element={<Alerts />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/elements/buttons`}
                element={<Buttons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/colors`}
                element={<Colors />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/avatarSquares`}
                element={<AvatarSquares />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/avatarRounded`}
                element={<AvatarRounded />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/avatarRadius`}
                element={<AvatarRadius />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/dropDowns`}
                element={<DropDowns />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/list`}
                element={<List />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/tags`}
                element={<Tags />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/paginations`}
                element={<Paginations />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/navigation`}
                element={<Navigation />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/typography`}
                element={<Typography />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/breadcrumbs`}
                element={<Breadcrumbs />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/badges`}
                element={<Badges />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/panels`}
                element={<Panels />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/elements/thumbnails`}
                element={<Thumbnails />}
              />
            </Route>



            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/mediaObject`}
                element={<Mediaobject />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/accordions`}
                element={<Accordions />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/tabs`}
                element={<Tabs />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/charts`}
                element={<Charts />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/modal`}
                element={<Modal />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/tooltipandPopover`}
                element={<TooltipandPopover />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/progress`}
                element={<Progress />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/carousels`}
                element={<Carousels />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/headers`}
                element={<Header />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/footers`}
                element={<Footer />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/userList`}
                element={<UserList />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/search`}
                element={<Search />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/advancedElements/cryptoCurrencies`}
                element={<Cryptocurrencies />}
              />
            </Route>



            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/charts/chartJs`}
                element={<ChartJs />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/charts/echarts`}
                element={<Echarts />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/charts/nvd3charts`}
                element={<Nvd3charts />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/charts/PieCharts`}
                element={<PieCharts />}
              /> 
            </Route>


            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/tables/defaultTables`}
                element={<DefaultTables />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/tables/dataTables`}
                element={<DataTables />}
              />
            </Route>


            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/form/formElements`}
                element={<FormElements />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/form/formAdvanced`}
                element={<FormAdvanced />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/form/formEditor`}
                element={<FormEditor />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/form/formWizard`}
                element={<FormWizard />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/form/formValidation`}
                element={<FormValidation />}
              />
            </Route>



            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/icon/fontAwesome`}
                element={<FontAwesome />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/materialDesignIcons`}
                element={<MaterialDesignIcons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/simpleLineIcons`}
                element={<SimpleLineIcons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/featherIcons`}
                element={<FeatherIcons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/ionicIcons`}
                element={<IonicIcons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/flagIcons`}
                element={<FlagIcons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/pe7Icons`}
                element={<Pe7Icons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/themifyIcons`}
                element={<ThemifyIcons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/typiconsIcons`}
                element={<TypiconsIcons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/weatherIcons`}
                element={<WeatherIcons />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/icon/typiconsIcons`}
                element={<TypiconsIcons />}
              />
            </Route>



            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/pages/profile`}
                element={<Profile />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/editProfile`}
                element={<EditProfile />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/mailInbox`}
                element={<MailInbox />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/mailCompose`}
                element={<MailCompose />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/gallery`}
                element={<Gallery />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/aboutCompany`}
                element={<AboutCompany />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/services`}
                element={<Services />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/faqs`}
                element={<FAQS />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/terms`}
                element={<Terms />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/invoice`}
                element={<Invoice />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/pricingTables`}
                element={<PricingTables />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/Blog/blog`}
                element={<Blog />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                element={<BlogDetails />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/Blog/blogPost`}
                element={<BlogPost />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/empty`}
                element={<Empty />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/maps/leafletMaps`}
                element={<LeafletMaps />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/maps/vectorMaps`}
                element={<VectorMaps />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/e-commerce/shop`}
                element={<Shop />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/e-commerce/productDetails`}
                element={<ProductDetails />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/e-commerce/shoppingCart`}
                element={<ShoppingCarts />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/e-commerce/wishlist`}
                element={<Wishlist />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/pages/e-commerce/checkout`}
                element={<Checkout />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/FileManager/FileAttachments/FileAttachments`}
                element={<FileAttachments />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                element={<FileDetails />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/FileManagerFileManager/FileManager`}
                element={<FileManager />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/FileManager/FileManagerList/FileManagerList`}
                element={<FileManagerList />}
              />
            </Route>
          */}


          </Route>


          {/*
          <Route
            path={`${process.env.PUBLIC_URL}/pages/themeStyle`}
            element={<Switcherlayout />}
          />

          
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<Custompages />}
          >
            <Route
              path={`${process.env.PUBLIC_URL}/pages/underConstruction`}
              element={<UnderConstruction />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/login`}
              element={<Login />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/register`}
              element={<Register />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/forgotPassword`}
              element={<ForgotPassword />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/lockScreen`}
              element={<LockScreen />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/errorpages/errorpage401`}
              element={<Errorpage401 />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/errorpages/errorpage403`}
              element={<Errorpage403 />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/errorpages/errorpage500`}
              element={<Errorpage500 />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/errorpages/errorpage503`}
              element={<Errorpage503 />}
            />
            <Route path="*" element={<Errorpage400 />} />
          </Route>
        */}



        </Routes>



        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

console.log(process.env) ;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
