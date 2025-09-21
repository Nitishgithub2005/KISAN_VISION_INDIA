import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// Complete list of Indian states and union territories
const states = [
  { id: 1, name: "Andhra Pradesh" },
  { id: 2, name: "Arunachal Pradesh" },
  { id: 3, name: "Assam" },
  { id: 4, name: "Bihar" },
  { id: 5, name: "Chhattisgarh" },
  { id: 6, name: "Goa" },
  { id: 7, name: "Gujarat" },
  { id: 8, name: "Haryana" },
  { id: 9, name: "Himachal Pradesh" },
  { id: 10, name: "Jharkhand" },
  { id: 11, name: "Karnataka" },
  { id: 12, name: "Kerala" },
  { id: 13, name: "Madhya Pradesh" },
  { id: 14, name: "Maharashtra" },
  { id: 15, name: "Manipur" },
  { id: 16, name: "Meghalaya" },
  { id: 17, name: "Mizoram" },
  { id: 18, name: "Nagaland" },
  { id: 19, name: "Odisha" },
  { id: 20, name: "Punjab" },
  { id: 21, name: "Rajasthan" },
  { id: 22, name: "Sikkim" },
  { id: 23, name: "Tamil Nadu" },
  { id: 24, name: "Telangana" },
  { id: 25, name: "Tripura" },
  { id: 26, name: "Uttar Pradesh" },
  { id: 27, name: "Uttarakhand" },
  { id: 28, name: "West Bengal" },
  { id: 29, name: "Andaman and Nicobar Islands" },
  { id: 30, name: "Chandigarh" },
  { id: 31, name: "Dadra and Nagar Haveli and Daman and Diu" },
  { id: 32, name: "Delhi" },
  { id: 33, name: "Jammu and Kashmir" },
  { id: 34, name: "Ladakh" },
  { id: 35, name: "Lakshadweep" },
  { id: 36, name: "Puducherry" }
];

// Sample districts for a few states - you should replace this with complete data
const districtsByState: { [key: string]: { id: number; name: string }[] } = {
    "Andhra Pradesh": [
  { id: 1, name: "Alluri Sitharama Raju" },
  { id: 2, name: "Anakapalli" },
  { id: 3, name: "Ananthapuramu" },
  { id: 4, name: "Annamayya" },
  { id: 5, name: "Bapatla" },
  { id: 6, name: "Chittoor" },
  { id: 7, name: "Dr. B.R. Ambedkar Konaseema" },
  { id: 8, name: "East Godavari" },
  { id: 9, name: "Eluru" },
  { id: 10, name: "Guntur" },
  { id: 11, name: "Kakinada" },
  { id: 12, name: "Krishna" },
  { id: 13, name: "Kurnool" },
  { id: 14, name: "Nandyal" },
  { id: 15, name: "NTR" },
  { id: 16, name: "Palnadu" },
  { id: 17, name: "Parvathipuram Manyam" },
  { id: 18, name: "Prakasam" },
  { id: 19, name: "Srikakulam" },
  { id: 20, name: "Sri Potti Sriramulu Nellore" },
  { id: 21, name: "Sri Sathya Sai" },
  { id: 22, name: "Tirupati" },
  { id: 23, name: "Visakhapatnam" },
  { id: 24, name: "Vizianagaram" },
  { id: 25, name: "West Godavari" },
  { id: 26, name: "YSR Kadapa" }
],
"Arunachal Pradesh": [
  { id: 1, name: "Anjaw" },
  { id: 2, name: "Bichom" },
  { id: 3, name: "Changlang" },
  { id: 4, name: "Dibang Valley" },
  { id: 5, name: "East Kameng" },
  { id: 6, name: "East Siang" },
  { id: 7, name: "Kamle" },
  { id: 8, name: "Keyi Panyor" },
  { id: 9, name: "Kra Daadi" },
  { id: 10, name: "Kurung Kumey" },
  { id: 11, name: "Lepa Rada" },
  { id: 12, name: "Lohit" },
  { id: 13, name: "Longding" },
  { id: 14, name: "Lower Dibang Valley" },
  { id: 15, name: "Lower Siang" },
  { id: 16, name: "Lower Subansiri" },
  { id: 17, name: "Namsai" },
  { id: 18, name: "Pakke-Kessang" },
  { id: 19, name: "Papum Pare" },
  { id: 20, name: "Shi Yomi" },
  { id: 21, name: "Siang" },
  { id: 22, name: "Tawang" },
  { id: 23, name: "Tirap" },
  { id: 24, name: "Upper Siang" },
  { id: 25, name: "Upper Subansiri" },
  { id: 26, name: "West Kameng" },
  { id: 27, name: "West Siang" }
],
"Assam": [
  { id: 1, name: "Baksa" },
  { id: 2, name: "Barpeta" },
  { id: 3, name: "Bajali" },
  { id: 4, name: "Biswanath" },
  { id: 5, name: "Bongaigaon" },
  { id: 6, name: "Cachar" },
  { id: 7, name: "Charaideo" },
  { id: 8, name: "Chirang" },
  { id: 9, name: "Darrang" },
  { id: 10, name: "Dhemaji" },
  { id: 11, name: "Dhubri" },
  { id: 12, name: "Dibrugarh" },
  { id: 13, name: "Dima Hasao" },
  { id: 14, name: "Goalpara" },
  { id: 15, name: "Golaghat" },
  { id: 16, name: "Hailakandi" },
  { id: 17, name: "Hojai" },
  { id: 18, name: "Jorhat" },
  { id: 19, name: "Kamrup Metropolitan" },
  { id: 20, name: "Kamrup" },
  { id: 21, name: "Karbi Anglong" },
  { id: 22, name: "Karimganj" },
  { id: 23, name: "Kokrajhar" },
  { id: 24, name: "Lakhimpur" },
  { id: 25, name: "Majuli" },
  { id: 26, name: "Morigaon" },
  { id: 27, name: "Nagaon" },
  { id: 28, name: "Nalbari" },
  { id: 29, name: "Sivasagar" },
  { id: 30, name: "Sonitpur" },
  { id: 31, name: "South Salmara-Mankachar" },
  { id: 32, name: "Tamulpur" },
  { id: 33, name: "Tinsukia" },
  { id: 34, name: "Udalguri" },
  { id: 35, name: "West Karbi Anglong" }
],
"Bihar": [
  { id: 1, name: "Araria" },
  { id: 2, name: "Arwal" },
  { id: 3, name: "Aurangabad" },
  { id: 4, name: "Banka" },
  { id: 5, name: "Begusarai" },
  { id: 6, name: "Bhagalpur" },
  { id: 7, name: "Bhojpur" },
  { id: 8, name: "Buxar" },
  { id: 9, name: "Darbhanga" },
  { id: 10, name: "East Champaran" },
  { id: 11, name: "Gaya" },
  { id: 12, name: "Gopalganj" },
  { id: 13, name: "Jamui" },
  { id: 14, name: "Jehanabad" },
  { id: 15, name: "Kaimur" },
  { id: 16, name: "Katihar" },
  { id: 17, name: "Khagaria" },
  { id: 18, name: "Kishanganj" },
  { id: 19, name: "Lakhisarai" },
  { id: 20, name: "Madhepura" },
  { id: 21, name: "Madhubani" },
  { id: 22, name: "Munger" },
  { id: 23, name: "Muzaffarpur" },
  { id: 24, name: "Nalanda" },
  { id: 25, name: "Nawada" },
  { id: 26, name: "Patna" },
  { id: 27, name: "Purnia" },
  { id: 28, name: "Rohtas" },
  { id: 29, name: "Saharsa" },
  { id: 30, name: "Samastipur" },
  { id: 31, name: "Saran" },
  { id: 32, name: "Sheikhpura" },
  { id: 33, name: "Sheohar" },
  { id: 34, name: "Sitamarhi" },
  { id: 35, name: "Siwan" },
  { id: 36, name: "Supaul" },
  { id: 37, name: "Vaishali" },
  { id: 38, name: "West Champaran" }
],
"Chhattisgarh": [
  { id: 1, name: "Balod" },
  { id: 2, name: "Baloda Bazar" },
  { id: 3, name: "Balrampur-Ramanujganj" },
  { id: 4, name: "Bastar" },
  { id: 5, name: "Bemetara" },
  { id: 6, name: "Bijapur" },
  { id: 7, name: "Bilaspur" },
  { id: 8, name: "Dantewada" },
  { id: 9, name: "Dhamtari" },
  { id: 10, name: "Durg" },
  { id: 11, name: "Gariaband" },
  { id: 12, name: "Gaurela-Pendra-Marwahi" },
  { id: 13, name: "Janjgir-Champa" },
  { id: 14, name: "Jashpur" },
  { id: 15, name: "Kabirdham" },
  { id: 16, name: "Kanker" },
  { id: 17, name: "Kondagaon" },
  { id: 18, name: "Korba" },
  { id: 19, name: "Koriya" },
  { id: 20, name: "Mahasamund" },
  { id: 21, name: "Mungeli" },
  { id: 22, name: "Narayanpur" },
  { id: 23, name: "Raigarh" },
  { id: 24, name: "Raipur" },
  { id: 25, name: "Rajnandgaon" },
  { id: 26, name: "Sakti" },
  { id: 27, name: "Sarangarh-Bilaigarh" },
  { id: 28, name: "Surajpur" },
  { id: 29, name: "Surguja" },
  { id: 30, name: "Khairagarh-Chhuikhadan-Gandai" },
  { id: 31, name: "Mohla-Manpur-Ambagarh Chowki" },
  { id: 32, name: "Manendragarh" },
  { id: 33, name: "Sukma" }
],
"Goa": [
  { id: 1, name: "North Goa" },
  { id: 2, name: "South Goa" }
],
"Gujarat": [
  { id: 1, name: "Ahmedabad" },
  { id: 2, name: "Amreli" },
  { id: 3, name: "Anand" },
  { id: 4, name: "Aravalli" },
  { id: 5, name: "Banaskantha" },
  { id: 6, name: "Bharuch" },
  { id: 7, name: "Bhavnagar" },
  { id: 8, name: "Botad" },
  { id: 9, name: "Chhota Udaipur" },
  { id: 10, name: "Dahod" },
  { id: 11, name: "Dang" },
  { id: 12, name: "Devbhoomi Dwarka" },
  { id: 13, name: "Gandhinagar" },
  { id: 14, name: "Gir Somnath" },
  { id: 15, name: "Jamnagar" },
  { id: 16, name: "Junagadh" },
  { id: 17, name: "Kheda" },
  { id: 18, name: "Kutch" },
  { id: 19, name: "Mahisagar" },
  { id: 20, name: "Mehsana" },
  { id: 21, name: "Morbi" },
  { id: 22, name: "Narmada" },
  { id: 23, name: "Navsari" },
  { id: 24, name: "Panchmahal" },
  { id: 25, name: "Patan" },
  { id: 26, name: "Porbandar" },
  { id: 27, name: "Rajkot" },
  { id: 28, name: "Sabarkantha" },
  { id: 29, name: "Surat" },
  { id: 30, name: "Surendranagar" },
  { id: 31, name: "Tapi" },
  { id: 32, name: "Vadodara" },
  { id: 33, name: "Valsad" },
  { id: 34, name: "Vav-Tharad" }
],
"Haryana": [
  { id: 1, name: "Ambala" },
  { id: 2, name: "Bhiwani" },
  { id: 3, name: "Charkhi Dadri" },
  { id: 4, name: "Faridabad" },
  { id: 5, name: "Fatehabad" },
  { id: 6, name: "Gurugram" },
  { id: 7, name: "Hisar" },
  { id: 8, name: "Jhajjar" },
  { id: 9, name: "Jind" },
  { id: 10, name: "Kaithal" },
  { id: 11, name: "Karnal" },
  { id: 12, name: "Kurukshetra" },
  { id: 13, name: "Mahendragarh" },
  { id: 14, name: "Nuh" },
  { id: 15, name: "Palwal" },
  { id: 16, name: "Panchkula" },
  { id: 17, name: "Panipat" },
  { id: 18, name: "Rewari" },
  { id: 19, name: "Rohtak" },
  { id: 20, name: "Sirsa" },
  { id: 21, name: "Sonipat" },
  { id: 22, name: "Yamunanagar" }
],
"Himachal Pradesh": [
  { id: 1, name: "Bilaspur" },
  { id: 2, name: "Chamba" },
  { id: 3, name: "Hamirpur" },
  { id: 4, name: "Kangra" },
  { id: 5, name: "Kinnaur" },
  { id: 6, name: "Kullu" },
  { id: 7, name: "Lahaul and Spiti" },
  { id: 8, name: "Mandi" },
  { id: 9, name: "Shimla" },
  { id: 10, name: "Sirmaur" },
  { id: 11, name: "Solan" },
  { id: 12, name: "Una" }
],
"Jharkhand": [
  { id: 1, name: "Bokaro" },
  { id: 2, name: "Chatra" },
  { id: 3, name: "Deoghar" },
  { id: 4, name: "Dhanbad" },
  { id: 5, name: "Dumka" },
  { id: 6, name: "East Singhbhum" },
  { id: 7, name: "Garhwa" },
  { id: 8, name: "Giridih" },
  { id: 9, name: "Godda" },
  { id: 10, name: "Gumla" },
  { id: 11, name: "Hazaribagh" },
  { id: 12, name: "Jamtara" },
  { id: 13, name: "Khunti" },
  { id: 14, name: "Koderma" },
  { id: 15, name: "Latehar" },
  { id: 16, name: "Lohardaga" },
  { id: 17, name: "Pakur" },
  { id: 18, name: "Palamu" },
  { id: 19, name: "Ramgarh" },
  { id: 20, name: "Ranchi" },
  { id: 21, name: "Sahebganj" },
  { id: 22, name: "Seraikela Kharsawan" },
  { id: 23, name: "Simdega" },
],
"Karnataka": [
  { id: 1, name: "Bagalkot" },
  { id: 2, name: "Ballari" },
  { id: 3, name: "Belagavi" },
  { id: 4, name: "Bengaluru Rural" },
  { id: 5, name: "Bengaluru Urban" },
  { id: 6, name: "Bidar" },
  { id: 7, name: "Chamarajanagar" },
  { id: 8, name: "Chikkaballapur" },
  { id: 9, name: "Chikkamagaluru" },
  { id: 10, name: "Chitradurga" },
  { id: 11, name: "Dakshina Kannada" },
  { id: 12, name: "Davanagere" },
  { id: 13, name: "Dharwad" },
  { id: 14, name: "Gadag" },
  { id: 15, name: "Hassan" },
  { id: 16, name: "Haveri" },
  { id: 17, name: "Kalaburagi" },
  { id: 18, name: "Kodagu" },
  { id: 19, name: "Kolar" },
  { id: 20, name: "Koppal" },
  { id: 21, name: "Mandya" },
  { id: 22, name: "Mysuru" },
  { id: 23, name: "Raichur" },
  { id: 24, name: "Ramanagara" },
  { id: 25, name: "Shivamogga" },
  { id: 26, name: "Tumakuru" },
  { id: 27, name: "Udupi" },
  { id: 28, name: "Uttara Kannada" },
  { id: 29, name: "Vijayapura" },
  { id: 30, name: "Yadgir" },
  { id: 31, name: "Chikkodi" }
],
"Kerala": [
  { id: 1, name: "Alappuzha" },
  { id: 2, name: "Ernakulam" },
  { id: 3, name: "Idukki" },
  { id: 4, name: "Kannur" },
  { id: 5, name: "Kasaragod" },
  { id: 6, name: "Kollam" },
  { id: 7, name: "Kottayam" },
  { id: 8, name: "Kozhikode" },
  { id: 9, name: "Malappuram" },
  { id: 10, name: "Palakkad" },
  { id: 11, name: "Pathanamthitta" },
  { id: 12, name: "Thiruvananthapuram" },
  { id: 13, name: "Thrissur" },
  { id: 14, name: "Wayanad" }
],
"Madhya Pradesh": [
  { id: 1, name: "Agar Malwa" },
  { id: 2, name: "Alirajpur" },
  { id: 3, name: "Anuppur" },
  { id: 4, name: "Ashoknagar" },
  { id: 5, name: "Balaghat" },
  { id: 6, name: "Barwani" },
  { id: 7, name: "Betul" },
  { id: 8, name: "Bhind" },
  { id: 9, name: "Bhopal" },
  { id: 10, name: "Burhanpur" },
  { id: 11, name: "Chhatarpur" },
  { id: 12, name: "Chhindwara" },
  { id: 13, name: "Damoh" },
  { id: 14, name: "Datia" },
  { id: 15, name: "Dewas" },
  { id: 16, name: "Dhar" },
  { id: 17, name: "Dindori" },
  { id: 18, name: "Guna" },
  { id: 19, name: "Gwalior" },
  { id: 20, name: "Harda" },
  { id: 21, name: "Hoshangabad" },
  { id: 22, name: "Indore" },
  { id: 23, name: "Jabalpur" },
  { id: 24, name: "Jhabua" },
  { id: 25, name: "Katni" },
  { id: 26, name: "Khandwa" },
  { id: 27, name: "Khargone" },
  { id: 28, name: "Mandla" },
  { id: 29, name: "Mandsaur" },
  { id: 30, name: "Morena" },
  { id: 31, name: "Narsinghpur" },
  { id: 32, name: "Neemuch" },
  { id: 33, name: "Niwari" },
  { id: 34, name: "Panna" },
  { id: 35, name: "Raisen" },
  { id: 36, name: "Rajgarh" },
  { id: 37, name: "Ratlam" },
  { id: 38, name: "Rewa" },
  { id: 39, name: "Sagar" },
  { id: 40, name: "Satna" },
  { id: 41, name: "Sehore" },
  { id: 42, name: "Seoni" },
  { id: 43, name: "Shahdol" },
  { id: 44, name: "Shajapur" },
  { id: 45, name: "Sheopur" },
  { id: 46, name: "Shivpuri" },
  { id: 47, name: "Sidhi" },
  { id: 48, name: "Singrauli" },
  { id: 49, name: "Tikamgarh" },
  { id: 50, name: "Ujjain" },
  { id: 51, name: "Umaria" },
  { id: 52, name: "Vidisha" }
],
"Tamil Nadu": [
  { id: 1, name: "Ariyalur" },
  { id: 2, name: "Chengalpattu" },
  { id: 3, name: "Chennai" },
  { id: 4, name: "Coimbatore" },
  { id: 5, name: "Cuddalore" },
  { id: 6, name: "Dharmapuri" },
  { id: 7, name: "Dindigul" },
  { id: 8, name: "Erode" },
  { id: 9, name: "Kallakurichi" },
  { id: 10, name: "Kanchipuram" },
  { id: 11, name: "Kanniyakumari" },
  { id: 12, name: "Karur" },
  { id: 13, name: "Krishnagiri" },
  { id: 14, name: "Madurai" },
  { id: 15, name: "Nagapattinam" },
  { id: 16, name: "Namakkal" },
  { id: 17, name: "Nilgiris" },
  { id: 18, name: "Perambalur" },
  { id: 19, name: "Pudukkottai" },
  { id: 20, name: "Ramanathapuram" },
  { id: 21, name: "Ranipet" },
  { id: 22, name: "Salem" },
  { id: 23, name: "Sivaganga" },
  { id: 24, name: "Tenkasi" },
  { id: 25, name: "Thanjavur" },
  { id: 26, name: "Theni" },
  { id: 27, name: "Thoothukudi" },
  { id: 28, name: "Tiruchirappalli" },
  { id: 29, name: "Tirunelveli" },
  { id: 30, name: "Tirupathur" },
  { id: 31, name: "Tiruppur" },
  { id: 32, name: "Tiruvallur" },
  { id: 33, name: "Tiruvannamalai" },
  { id: 34, name: "Tiruvarur" },
  { id: 35, name: "Vellore" },
  { id: 36, name: "Viluppuram" },
  { id: 37, name: "Virudhunagar" },
  { id: 38, name: "Mayiladuthurai" }
],

  "Maharashtra": [
    { id: 1, name: "Ahmednagar" },
    { id: 2, name: "Akola" },
    { id: 3, name: "Amravati" },
    { id: 4, name: "Aurangabad" },
    { id: 5, name: "Beed" },
    { id: 6, name: "Bhandara" },
    { id: 7, name: "Buldhana" },
    { id: 8, name: "Chandrapur" },
    { id: 9, name: "Dhule" },
    { id: 10, name: "Gadchiroli" },
    { id: 11, name: "Gondia" },
    { id: 12, name: "Hingoli" },
    { id: 13, name: "Jalgaon" },
    { id: 14, name: "Jalna" },
    { id: 15, name: "Kolhapur" },
    { id: 16, name: "Latur" },
    { id: 17, name: "Mumbai City" },
    { id: 18, name: "Mumbai Suburban" },
    { id: 19, name: "Nagpur" },
    { id: 20, name: "Nanded" },
    { id: 21, name: "Nandurbar" },
    { id: 22, name: "Nashik" },
    { id: 23, name: "Osmanabad" },
    { id: 24, name: "Palghar" },
    { id: 25, name: "Parbhani" },
    { id: 26, name: "Pune" },
    { id: 27, name: "Raigad" },
    { id: 28, name: "Ratnagiri" },
    { id: 29, name: "Sangli" },
    { id: 30, name: "Satara" },
    { id: 31, name: "Sindhudurg" },
    { id: 32, name: "Solapur" },
    { id: 33, name: "Thane" },
    { id: 34, name: "Wardha" },
    { id: 35, name: "Washim" },
    { id: 36, name: "Yavatmal" }
  ],
  "Telangana": [
  { id: 1, name: "Adilabad" },
  { id: 2, name: "Bhadradri Kothagudem" },
  { id: 3, name: "Hanumakonda" },
  { id: 4, name: "Hyderabad" },
  { id: 5, name: "Jagtial" },
  { id: 6, name: "Jangaon" },
  { id: 7, name: "Jayashankar Bhupalapally" },
  { id: 8, name: "Jogulamba Gadwal" },
  { id: 9, name: "Kamareddy" },
  { id: 10, name: "Karimnagar" },
  { id: 11, name: "Khammam" },
  { id: 12, name: "Komaram Bheem" },
  { id: 13, name: "Mahabubabad" },
  { id: 14, name: "Mahabubnagar" },
  { id: 15, name: "Mancherial" },
  { id: 16, name: "Medak" },
  { id: 17, name: "Medchal–Malkajgiri" },
  { id: 18, name: "Mulugu" },
  { id: 19, name: "Nagarkurnool" },
  { id: 20, name: "Nalgonda" },
  { id: 21, name: "Narayanpet" },
  { id: 22, name: "Nirmal" },
  { id: 23, name: "Nizamabad" },
  { id: 24, name: "Peddapalli" },
  { id: 25, name: "Rajanna Sircilla" },
  { id: 26, name: "Ranga Reddy" },
  { id: 27, name: "Sangareddy" },
  { id: 28, name: "Siddipet" },
  { id: 29, name: "Suryapet" },
  { id: 30, name: "Vikarabad" },
  { id: 31, name: "Wanaparthy" },
  { id: 32, name: "Warangal" },
  { id: 33, name: "Yadadri Bhuvanagiri" }
],
"Uttar Pradesh": [
  { id: 1, name: "Agra" },
  { id: 2, name: "Aligarh" },
  { id: 3, name: "Ambedkar Nagar" },
  { id: 4, name: "Amethi" },
  { id: 5, name: "Amroha" },
  { id: 6, name: "Auraiya" },
  { id: 7, name: "Ayodhya" },
  { id: 8, name: "Azamgarh" },
  { id: 9, name: "Baghpat" },
  { id: 10, name: "Bahraich" },
  { id: 11, name: "Ballia" },
  { id: 12, name: "Balrampur" },
  { id: 13, name: "Banda" },
  { id: 14, name: "Barabanki" },
  { id: 15, name: "Bareilly" },
  { id: 16, name: "Basti" },
  { id: 17, name: "Bhadohi" },
  { id: 18, name: "Bijnor" },
  { id: 19, name: "Budaun" },
  { id: 20, name: "Bulandshahr" },
  { id: 21, name: "Chandauli" },
  { id: 22, name: "Chitrakoot" },
  { id: 23, name: "Deoria" },
  { id: 24, name: "Etah" },
  { id: 25, name: "Etawah" },
  { id: 26, name: "Farrukhabad" },
  { id: 27, name: "Fatehpur" },
  { id: 28, name: "Firozabad" },
  { id: 29, name: "Gautam Buddha Nagar" },
  { id: 30, name: "Ghaziabad" },
  { id: 31, name: "Ghazipur" },
  { id: 32, name: "Gonda" },
  { id: 33, name: "Gorakhpur" },
  { id: 34, name: "Hamirpur" },
  { id: 35, name: "Hapur" },
  { id: 36, name: "Hardoi" },
  { id: 37, name: "Hathras" },
  { id: 38, name: "Jalaun" },
  { id: 39, name: "Jaunpur" },
  { id: 40, name: "Jhansi" },
  { id: 41, name: "Kannauj" },
  { id: 42, name: "Kanpur Dehat" },
  { id: 43, name: "Kanpur Nagar" },
  { id: 44, name: "Kasganj" },
  { id: 45, name: "Kaushambi" },
  { id: 46, name: "Kheri" },
  { id: 47, name: "Kushinagar" },
  { id: 48, name: "Lalitpur" },
  { id: 49, name: "Lucknow" },
  { id: 50, name: "Maharajganj" },
  { id: 51, name: "Mahoba" },
  { id: 52, name: "Mainpuri" },
  { id: 53, name: "Mathura" },
  { id: 54, name: "Mau" },
  { id: 55, name: "Meerut" },
  { id: 56, name: "Mirzapur" },
  { id: 57, name: "Moradabad" },
  { id: 58, name: "Muzaffarnagar" },
  { id: 59, name: "Pilibhit" },
  { id: 60, name: "Pratapgarh" },
  { id: 61, name: "Prayagraj" },
  { id: 62, name: "Raebareli" },
  { id: 63, name: "Rampur" },
  { id: 64, name: "Saharanpur" },
  { id: 65, name: "Sambhal" },
  { id: 66, name: "Sant Kabir Nagar" },
],
"Uttarakhand": [
  { id: 1, name: "Almora" },
  { id: 2, name: "Bageshwar" },
  { id: 3, name: "Chamoli" },
  { id: 4, name: "Champawat" },
  { id: 5, name: "Dehradun" },
  { id: 6, name: "Haridwar" },
  { id: 7, name: "Nainital" },
  { id: 8, name: "Pauri Garhwal" },
  { id: 9, name: "Pithoragarh" },
  { id: 10, name: "Rudraprayag" },
  { id: 11, name: "Tehri Garhwal" },
  { id: 12, name: "Udham Singh Nagar" },
  { id: 13, name: "Uttarkashi" }
],
"West Bengal": [
  { id: 1, name: "Alipurduar" },
  { id: 2, name: "Bankura" },
  { id: 3, name: "Birbhum" },
  { id: 4, name: "Cooch Behar" },
  { id: 5, name: "Dakshin Dinajpur" },
  { id: 6, name: "Darjeeling" },
  { id: 7, name: "Hooghly" },
  { id: 8, name: "Howrah" },
  { id: 9, name: "Jalpaiguri" },
  { id: 10, name: "Jhargram" },
  { id: 11, name: "Kalimpong" },
  { id: 12, name: "Kolkata" },
  { id: 13, name: "Malda" },
  { id: 14, name: "Murshidabad" },
  { id: 15, name: "Nadia" },
  { id: 16, name: "North 24 Parganas" },
  { id: 17, name: "Paschim Bardhaman" },
  { id: 18, name: "Paschim Medinipur" },
  { id: 19, name: "Purba Bardhaman" },
  { id: 20, name: "Purba Medinipur" },
  { id: 21, name: "Purulia" },
  { id: 22, name: "South 24 Parganas" },
  { id: 23, name: "Uttar Dinajpur" }
],
"Andaman and Nicobar Islands": [
  { id: 1, name: "Nicobar" },
  { id: 2, name: "North and Middle Andaman" },
  { id: 3, name: "South Andaman" }
],
"Chandigarh": [
  { id: 1, name: "Chandigarh" }
],
"Dadra and Nagar Haveli and Daman and Diu": [
  { id: 1, name: "Dadra and Nagar Haveli" },
  { id: 2, name: "Daman" },
  { id: 3, name: "Diu" }
],
"Delhi": [
  { id: 1, name: "Central Delhi" },
  { id: 2, name: "East Delhi" },
  { id: 3, name: "New Delhi" },
  { id: 4, name: "North Delhi" },
  { id: 5, name: "North East Delhi" },
  { id: 6, name: "North West Delhi" },
  { id: 7, name: "Shahdara" },
  { id: 8, name: "South Delhi" },
  { id: 9, name: "South East Delhi" },
  { id: 10, name: "South West Delhi" },
  { id: 11, name: "West Delhi" }
],
"Jammu and Kashmir": [
  { id: 1, name: "Anantnag" },
  { id: 2, name: "Bandipora" },
  { id: 3, name: "Baramulla" },
  { id: 4, name: "Budgam" },
  { id: 5, name: "Doda" },
  { id: 6, name: "Ganderbal" },
  { id: 7, name: "Jammu" },
  { id: 8, name: "Kathua" },
  { id: 9, name: "Kishtwar" },
  { id: 10, name: "Kulgam" },
  { id: 11, name: "Kupwara" },
  { id: 12, name: "Poonch" },
  { id: 13, name: "Pulwama" },
  { id: 14, name: "Rajouri" },
  { id: 15, name: "Ramban" },
  { id: 16, name: "Reasi" },
  { id: 17, name: "Samba" },
  { id: 18, name: "Shopian" },
  { id: 19, name: "Srinagar" },
  { id: 20, name: "Udhampur" }
],
"Ladakh": [
  { id: 1, name: "Kargil" },
  { id: 2, name: "Leh" }
],
"Lakshadweep": [
  { id: 1, name: "Lakshadweep" }
],
"Puducherry": [
  { id: 1, name: "Puducherry" },
  { id: 2, name: "Karaikal" },
  { id: 3, name: "Mahe" },
  { id: 4, name: "Yanam" }
],
  
};

interface PredictionResult {
  majorCrop: string;
  otherCrops: string[];
  explanation: string;
  soilComposition: {
    [key: string]: number;
  };
  weatherPatterns: {
    [key: string]: number;
  };
  cropEconomics: {
    [key: string]: number;
  };
  soilChemicals: {
    [key: string]: number;
  };
}

const chartColors = {
  primary: ['#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0'],
  secondary: ['#065F46', '#047857', '#059669', '#10B981', '#34D399'],
  background: ['rgba(5, 150, 105, 0.1)', 'rgba(16, 185, 129, 0.1)', 'rgba(52, 211, 153, 0.1)', 'rgba(110, 231, 183, 0.1)', 'rgba(167, 243, 208, 0.1)']
};

const chartOptions = {
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        font: {
          size: 12,
          family: "'Inter', sans-serif"
        },
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    }
  },
  cutout: '0%'
};

const Predictions = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePredict = async () => {
    if (!selectedState || !selectedDistrict) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setPredictionResult(null);

    try {
      const prompt = `Given the location: ${selectedDistrict}, ${selectedState}, India, please provide:
1. The most economically viable major crop that can be grown in this region
2. A list of other suitable crops that can be grown
3. A concise explanation of the agricultural situation (max 150 words)
4. Soil composition percentages (as JSON object)
5. Weather patterns percentages (as JSON object)
6. Economic viability percentages for each suggested crop (as JSON object)
7. Soil chemical composition percentages (as JSON object)

Format the response as JSON with the following structure:
{
  "majorCrop": "name of the major crop",
  "otherCrops": ["crop1", "crop2", "crop3"],
  "explanation": "concise explanation",
  "soilComposition": {
    "Clay": 30,
    "Silt": 40,
    "Sand": 30
  },
  "weatherPatterns": {
    "Rainy": 40,
    "Dry": 30,
    "Moderate": 30
  },
  "cropEconomics": {
    "Crop1": 35,
    "Crop2": 25,
    "Crop3": 20,
    "Crop4": 20
  },
  "soilChemicals": {
    "Nitrogen": 25,
    "Phosphorus": 20,
    "Potassium": 15,
    "Organic Matter": 20,
    "pH Level": 20
  }
}`;

      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=API_KEY",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: prompt }]
            }]
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get predictions");
      }

      const data = await response.json();
      const text = data.candidates[0].content.parts[0].text;
      
      // Clean the response text by removing markdown formatting
      const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
      
      // Parse the JSON response
      const parsedResult = JSON.parse(cleanedText);
      setPredictionResult(parsedResult);
    } catch (err) {
      setError("Failed to get predictions. Please try again. Error: " + err);
      console.error("Prediction error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const createPieChartData = (data: { [key: string]: number }, backgroundColor: string[]) => ({
    labels: Object.keys(data),
    datasets: [{
      data: Object.values(data),
      backgroundColor,
      borderColor: backgroundColor.map(color => color.replace('0.6', '1')),
      borderWidth: 1,
    }]
  });

  const hasDistrictData = (state: string) => {
    return districtsByState[state] && districtsByState[state].length > 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />
      <div className="container mx-auto p-6">
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-emerald-600 to-green-600">
              <CardTitle className="text-3xl font-bold text-white">Crop Predictions Dashboard</CardTitle>
              <p className="text-emerald-100 mt-2">Select your location to get crop predictions</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select State</label>
                    <Select
                      value={selectedState}
                      onValueChange={(value) => {
                        setSelectedState(value);
                        setSelectedDistrict("");
                        setPredictionResult(null);
                      }}
                    >
                      <SelectTrigger className="w-full bg-white border-emerald-200 focus:border-emerald-500">
                        <SelectValue placeholder="Select a state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state.id} value={state.name}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select District</label>
                    <Select
                      value={selectedDistrict}
                      onValueChange={(value) => {
                        setSelectedDistrict(value);
                        setPredictionResult(null);
                      }}
                      disabled={!selectedState || !hasDistrictData(selectedState)}
                    >
                      <SelectTrigger className="w-full bg-white border-emerald-200 focus:border-emerald-500">
                        <SelectValue placeholder={
                          !selectedState 
                            ? "Select a state first" 
                            : !hasDistrictData(selectedState)
                              ? "District data not available"
                              : "Select a district"
                        } />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedState && hasDistrictData(selectedState) ? (
                          districtsByState[selectedState].map((district) => (
                            <SelectItem key={district.id} value={district.name}>
                              {district.name}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="no-data" disabled>
                            No district data available
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={handlePredict}
                    disabled={!selectedState || !selectedDistrict || !hasDistrictData(selectedState) || isLoading}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg"
                  >
                    {isLoading ? "Predicting..." : "Predict"}
                  </Button>
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{error}</p>
                  </div>
                )}

                {predictionResult && (
                  <div className="mt-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-emerald-600 to-green-600 p-6 rounded-xl text-white shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">
                          Major Recommended Crop
                        </h3>
                        <p className="text-2xl font-medium">{predictionResult.majorCrop}</p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
                        <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
                          Other Suitable Crops
                        </h3>
                        <ul className="grid grid-cols-2 gap-3">
                          {predictionResult.otherCrops.map((crop, index) => (
                            <li key={index} className="text-gray-700 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                              {crop}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                          Soil Composition
                        </h3>
                        <div className="h-64">
                          <Pie 
                            data={createPieChartData(
                              predictionResult.soilComposition,
                              chartColors.primary
                            )}
                            options={chartOptions}
                          />
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                          Weather Patterns
                        </h3>
                        <div className="h-64">
                          <Pie 
                            data={createPieChartData(
                              predictionResult.weatherPatterns,
                              chartColors.secondary
                            )}
                            options={chartOptions}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                          Soil Chemical Composition
                        </h3>
                        <div className="h-64">
                          <Pie 
                            data={createPieChartData(
                              predictionResult.soilChemicals,
                              chartColors.primary
                            )}
                            options={chartOptions}
                          />
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                          Crop Economics
                        </h3>
                        <div className="h-64">
                          <Pie 
                            data={createPieChartData(
                              predictionResult.cropEconomics,
                              chartColors.secondary
                            )}
                            options={chartOptions}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100 shadow-lg">
                      <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                        Analysis & Explanation
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {predictionResult.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Predictions; 
