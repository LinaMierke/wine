// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
// import Container from '@material-ui/core/Container';
// import Typography from '../components/Typography';
// // import TextField from '../components/TextField';

// function Copyright() {
//   return (
//     <React.Fragment style={{ color: 'white' }}>
//       {'© '}
//       <Link color="inherit" href="https://material-ui.com/" style={{ color: 'white' }}>
//         {/* @2020 */}
//       </Link>{' '}
//       {new Date().getFullYear()}
//     </React.Fragment>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     backgroundColor: theme.palette.secondary.light,
//   },
//   container: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(8),
//     display: 'flex',
//   },
//   iconsWrapper: {
//     height: 120,
//   },
//   icons: {
//     display: 'flex',
//   },
//   icon: {
//     width: 48,
//     height: 48,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: theme.palette.warning.main,
//     marginRight: theme.spacing(1),
//     '&:hover': {
//       backgroundColor: theme.palette.warning.dark,
//     },
//   },
//   list: {
//     margin: 0,
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     paddingTop: theme.spacing(0.5),
//     paddingBottom: theme.spacing(0.5),
//   },
//   language: {
//     marginTop: theme.spacing(1),
//     width: 150,
//   },
// }));



// export default function AppFooter() {
//   const classes = useStyles();

//   return (
//     <Typography component="footer" className={classes.root} style={{ backgroundColor: 'black' }}>
//       <Container className={classes.container}>
//         <Grid container spacing={5}>
//           <Grid item xs={6} sm={4} md={3}>
//             <Grid
//               container
//               direction="column"
//               justify="flex-end"
//               className={classes.iconsWrapper}
//               spacing={2}
//             >
//               <Grid item className={classes.icons}>
//                 {/* <a href="https://material-ui.com/" className={classes.icon}>
//                   <img src="/static/themes/onepirate/appFooterFacebook.png" alt="Facebook" />
//                 </a> */}
//                 {/* <a href="https://twitter.com/MaterialUI" className={classes.icon}>
//                   <img src="/static/themes/onepirate/appFooterTwitter.png" alt="Twitter" />
//                 </a> */}
//               </Grid>
//               <Grid item>
//                 <Copyright />
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={6} sm={4} md={2}>
//             <Typography variant="h6" marked="left" gutterBottom style={{  color: 'white' }}>
//               Contact us
//             </Typography>
//             <ul className={classes.list}>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/terms/" style={{  color: 'white' }}>Terms</Link>
//               </li>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/privacy/" style={{  color: 'white' }}>Privacy</Link>
//               </li>
//             </ul>
//           </Grid>
//           <Grid item xs={6} sm={4} md={2}>
//             <Typography variant="h6" marked="left" gutterBottom style={{  color: 'white' }}>
//               Social Media
//             </Typography>
//             <ul className={classes.list}>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/terms/" style={{  color: 'white' }}>Facebook</Link>
//               </li>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/privacy/" style={{  color: 'white' }}>Instagram</Link>
//               </li>
//             </ul>
//           </Grid>
//           <Grid item xs={6} sm={4} md={2}>
//             <Typography variant="h6" marked="left" gutterBottom style={{  color: 'white' }}>
//               Careers
//             </Typography>
//             <ul className={classes.list}>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/terms/" style={{  color: 'white' }}>Resume</Link>
//               </li>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/privacy/" style={{  color: 'white' }}>Jobs</Link>
//               </li>
//             </ul>
//           </Grid>
//           {/* <Grid item xs={6} sm={8} md={4}>
//             <Typography variant="h6" marked="left" gutterBottom style={{ color: 'white' }}>
//               About
//               <ul className={classes.list}>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/terms/" style={{  color: 'white' }}>Mission</Link>
//               </li>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/privacy/" style={{  color: 'white' }}>Social Media</Link>
//               </li>
//             </ul>

//             </Typography>
            
//           </Grid> */}
//           <Grid item>
//             <Typography variant="caption" style={{ color: 'white' }}>
              
//               {/* <Link href="https://www.wineoclock.com" rel="sponsored" title="Flaticon" style={{ color: 'white' }}>
//                 www.flaticon.com
//               </Link>
//               {' is licensed by '}
//               <Link style={{ color: 'white' }}
//                 title="Creative Commons BY 3.0"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 CC 3.0 BY
//               </Link> */}
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Typography>
//   );
// }