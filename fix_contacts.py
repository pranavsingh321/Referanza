#!/usr/bin/env python

import sys
import os
import csv
import re


class Contacts():
    EMAIL_REGEX = re.compile(r"[^@]+@[^@]+\.[^@]+")
    UNWANTED_CHARS = ["(", ")", "-", ","]
    ERROR_FILE = "error"
    FIX_FILE = "fix"
    VALID_FILE = "valid"

    HEADERS = {
                'First name' : "david",
               'last name' : "david",
               'email':"",
               "phone": "",
              }

    def __init__(self, file_path):
        self.source_dir, self.source_file = os.path.split(os.path.abspath(file_path))
        self.headers = None

    def valid_phone(self, phone_number):
        if len(phone_number) == 10 and phone_number.isdigit():
            return True
        return False

    def fix_phone_number(self, phone_number):
        updated_number = st.translate({ord(c): None for c in self.UNWANTED_CHARS})
        if valid_phone(updated_number):
            return updated_number
        return False

    def valid_email(self, email):
        if not EMAIL_REGEX.match(email):
            return False
        return True

    def num_rows(self, file_path):
        with open(file_path) as _file:
            return sum(1 for row in _file)

    def read_header(self, reader):
        self.headers = next(reader, None)

    def split(self, file_path, numbers):
        splitLen = int(self.num_rows(file_path)/numbers)
        outputBase = 'part_'

        input_file = open(file_path)

        count = 0
        part_number = 0
        dest_file = None
        for line in input_file:
            if count % splitLen == 0:
                if dest_file:
                    dest_file.close()
                dest_file = open(os.path.join(self.source_dir, outputBase + str(part_number) + '.csv'), 'w')
                part_number += 1
            dest_file.write(line)
            count += 1
        if dest_file:
            dest_file.close()
        input_file.close()

    def write_to_file(self, file_name, content):
        with open(os.path.join(self.source_dir, file_name + ".csv"), "wb") as input_file:
            for row in content:
                  input_file.write(row)

    def type_data(input_text):
        distribution = {'special': 0, 'number': 0, 'chars': 0}
        for char in input_text:
            if distribution.isdigit():
                distribution['number'] += 1
            elif distribution.isalpha():
                distribution['chars'] += 1
            else:
                distribution['special'] += 1
        percentage_distribution = {key: distribution[key]/len(input_text)
                                   for key in distribution}

    def try_fill(row):
        outputBase = 'error_'

    def read(self, file_path):
        errors_list = []
        fix_list = []

        with open(file_path) as input_csv, open(os.path.join(self.source_dir, self.VALID_FILE  + '.csv'), 'w') as valid_csv:
             reader = csv.reader(input_csv)
             self.read_header(reader)
             headers_len = len(self.headers)
             for row in reader:
                 if len(row) != headers_len:
                     try_fill(row, fix_csv)
                     error_list
                 else:
                     valid_csv.write(row)

    def convert_csv(self):
        pass

    def get_headers_list(self):
        pass


def read_args():
   arguments = sys.argv[1:]
   import pdb;pdb.set_trace()


if __name__ == "__main__":
    read_args()
