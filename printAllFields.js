var inc = new GlideRecord("incident");
inc.query();
while (inc.next()) {

    gs.print("Number " + inc.number + "Short Description " + inc.short_description + " Category " + inc.category);
}

/*   Script: Number INC0000060 Short Description Unable to connect to email Category inquiry
 *** Script: Number INC0009002 Short Description My computer is not detecting the headphone device Category Hardware
 *** Script: Number INC0000009 Short Description Reset my password Category inquiry
 *** Script: Number INC0000010 Short Description Need Oracle 10GR2 installed Category database
 *** Script: Number INC0000011 Short Description Need new Blackberry set up Category inquiry
 *** Script: Number INC0000012 Short Description Customer didn't receive eFax Category software
 *** Script: Number INC0000013 Short Description EMAIL is slow when an attachment is involved Category inquiry
 *** Script: Number INC0000014 Short Description Missing my home directory Category inquiry
 *** Script: Number INC0000021 Short Description New employee hire Category inquiry*/